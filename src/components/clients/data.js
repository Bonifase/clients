const clients = () => {
    const clients = [
        {
            id: 1,
            name: "JERRY JOE",
            phone: "223-334-133",
            dietary: "Vegan",
            isconfirmed: false
        },
        {
            id: 2,
            name: "John doe",
            phone: "117-334-100",
            dietary: "Pescatarian",
            isconfirmed: false
        },
        {
            id: 3,
            name: "John doe",
            phone: "117-334-100",
            dietary: "Vegan",
            isconfirmed: true
        },
        {
            id: 5,
            name: "Jack Maa",
            phone: "117-334-100",
            dietary: "Pescatarian",
            isconfirmed: false
        },
        {
            id: 4,
            name: "Nicola Tesla",
            phone: "993-664-177",
            dietary: "Non-Veg",
            isconfirmed: true
        }
    ];
    return clients;
}

export default clients;