
interface welcomeProps{
    name: string;
}

export default function Welcome({name}: welcomeProps){
    return(
        <div>
            <h1>
                Welcome, {name}!
            </h1>
            <p>
                This is your first component in TypeScript with React.
            </p>
        </div>
    );
}