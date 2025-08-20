import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const incrementAndFetchCount = async () => {
      try {
        // Check if Supabase is configured
        if (!supabase || !import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_URL === 'your_project_url_here') {
          // Fallback to localStorage if Supabase is not configured
          const storedCount = localStorage.getItem('visitorCount');
          const currentCount = storedCount ? parseInt(storedCount, 10) : 0;
          const newCount = currentCount + 1;
          setCount(newCount);
          localStorage.setItem('visitorCount', newCount.toString());
          setLoading(false);
          return;
        }

        // Check if we've already counted this session
        const hasVisited = sessionStorage.getItem('hasVisited');
        
        if (!hasVisited) {
          // Increment the counter in database
          const { data, error } = await supabase
            .rpc('increment_visitor_count');
          
          if (error) {
            console.error('Error incrementing visitor count:', error);
            // Fallback to just fetching current count
            const { data: visitData } = await supabase
              .from('site_visitors')
              .select('count')
              .eq('id', 1)
              .single();
            
            if (visitData) {
              setCount(visitData.count);
            }
          } else {
            setCount(data);
            // Mark this session as counted
            sessionStorage.setItem('hasVisited', 'true');
          }
        } else {
          // Just fetch the current count without incrementing
          const { data: visitData } = await supabase
            .from('site_visitors')
            .select('count')
            .eq('id', 1)
            .single();
          
          if (visitData) {
            setCount(visitData.count);
          }
        }
      } catch (error) {
        console.error('Error with visitor counter:', error);
        // Fallback to localStorage
        const storedCount = localStorage.getItem('visitorCount');
        const currentCount = storedCount ? parseInt(storedCount, 10) : 0;
        setCount(currentCount + 1);
      } finally {
        setLoading(false);
      }
    };

    incrementAndFetchCount();
  }, []);

  // Format count with leading zeros (6 digits)
  const formattedCount = count.toString().padStart(6, '0');

  return (
    <Card className="bg-card border-border shadow-sm">
      <CardContent className="p-3 sm:p-4">
        <div className="flex flex-col items-start space-y-2">
          <div className="text-xs text-muted-foreground">
            You are visitor number:
          </div>
          <div className="bg-red-950 border border-red-500 rounded-md px-3 py-2 flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <div className="font-mono text-sm font-bold text-red-400 tracking-wider">
              {loading ? '------' : formattedCount}
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            to this site
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VisitorCounter;