import Click from "../quick-start/click";
import Sync from "../quick-start/sync";

export default function About(){

    return(
        <div>
            <p>
                Welcome to about page!
            </p>
            <Click />
            <Click />
            {/* both have buttons which has different states handled by react, one doesnt affect the other */}

            <Sync />
            {/* both have buttons which share same state handled by react, one affects the other */}
        </div>
    );
}