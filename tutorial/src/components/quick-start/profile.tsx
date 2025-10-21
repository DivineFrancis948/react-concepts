const user = {
    name: "Divine Francis",
    age: 28,
    hobbies: ["Reading", "Traveling", "Coding"],    
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg'
}

const gadgets = [
    {brand: "Apple",
    model: "iPhone 13",
    features: ["5G", "Dual Camera", "Face ID"],
    imageUrl: 'https://i.imgur.com/1XKQ9Z5s.jpg',
    isGood: true,
    id: 1
    },
    {brand: "Samsung",
    model: "Galaxy S21",
    features: ["120Hz Display", "Triple Camera", "Fingerprint Sensor"],
    imageUrl: 'https://i.imgur.com/2nCt3Sbl.jpg',
    isGood: false,
    id: 2
    },
    {brand: "Google",
    model: "Pixel 6",
    features: ["Tensor Chip", "Dual Camera", "Android 12"],
    imageUrl: 'https://i.imgur.com/3GvwNBbl.jpg',
    isGood: true,
    id: 3
    },
    

    ]


    const gadgetList = gadgets.map(gadget => 
        <li key={gadget.id}
        style={{ color : gadget.isGood ? 'darkgreen' : 'GrayText' }}
        >
            {gadget.brand} {gadget.model}   
        </li>
)


export default function Profile(){
    return (
        <>
            <h1>{user.name}</h1>
            <img src={user.imageUrl} alt="Profile Picture" />
            <p>Age: {user.age}</p>
            <h2>Hobbies:</h2>
            <ul>
                {user.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>

            <ul>
                {gadgetList}
            </ul>
        </>
    );
}