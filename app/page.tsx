import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function Page() {
  return (
    <div>
      <Card className="w-[320px] max-w-[400px] p-1">
        <CardHeader className="p-3">
          <img
            src="https://images.unsplash.com/photo-1679403766682-3b31efa571a8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Card Image"
            className="h-32 w-full rounded-t object-cover"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="">CDK Challenge</CardTitle>
        </CardContent>
      </Card>
    </div>
  );
}

export default Page;
