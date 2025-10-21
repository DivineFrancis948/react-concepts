
//note the event handler dont need paratheses because we are not invoking it here. react will invoke it when the event occurs (user clicks).

import { useState } from "react";
import { Button } from "../ui/button";


export default function Click(){

    const [count, setCount] = useState(0);

    function hi(){
    setCount(count + 1);
    }


    return(
        <div>
            <Button onClick={hi}>
                {`Clicked ${count} times`}
            </Button>
        </div>
    )
}