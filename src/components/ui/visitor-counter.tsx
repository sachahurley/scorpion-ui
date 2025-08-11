import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Get or initialize visitor count from localStorage
    const storedCount = localStorage.getItem('visitorCount');
    const currentCount = storedCount ? parseInt(storedCount, 10) : 0;
    
    // Increment count and store it
    const newCount = currentCount + 1;
    
    // Add random hundreds (200-800)
    const randomHundreds = Math.floor(Math.random() * 7 + 2) * 100;
    const displayCount = newCount + randomHundreds;
    
    setCount(displayCount);
    localStorage.setItem('visitorCount', newCount.toString());
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
            <div className="font-mono text-sm font-bold text-red-400 tracking-wider">
              {formattedCount}
            </div>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
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