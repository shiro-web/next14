import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';


const BBSCard = () => {
  return (
    <div>
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatibus eveniet eligendi, temporibus blanditiis iusto praesentium doloribus debitis labore nihil quia. Fugit voluptatibus sed nihil explicabo libero? Fugit, assumenda eos?
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={"/bbs-posts/1"} className="text-blue-500">Read More</Link>
      </CardFooter>
    </Card>
    </div>
  )
}

export default BBSCard