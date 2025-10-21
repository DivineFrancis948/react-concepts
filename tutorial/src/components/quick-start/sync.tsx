import React from "react";
import { Button } from "../ui/button";

export default function Sync(){

const [count, setCount] = React.useState(0);

function increment(){
    setCount(count + 1);
}

return(
    <div>
        <p>Count: {count}</p>
        <Button onClick={increment}>{`button1 clicked ${count} times`}</Button>
        <Button onClick={increment}>{`button 2 clicked ${count} times`}</Button>
    </div>
);      
}