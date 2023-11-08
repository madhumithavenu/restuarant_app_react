import { useEffect, useState } from "react";
function Restaurant(props) {
    const [menuData, setMenuData] = useState({
        flag: false,
        foodData: null,
        drinkData: null
    });

    async function getData(){
        let backend_url = 'http://localhost:3200/data';
        let response = await fetch(backend_url);
        let responseData = await response.json();
        setMenuData ({
            flag: true,
            foodData: responseData[0],
            drinkData: responseData[1]
        });
    }
    useEffect(()=>{
        getData();
    },[]);

  
    return (
        <div className="pri">
        <div>
            <h1>Food Menu</h1>
                {
                menuData.flag ? 
                menuData.foodData.map(item =>{
                    return <li key = {item.foodName}>
                        Food Name is {item.foodName}, Price: {item.price}, Category: {item.category}
                    </li>
                }): <h1>Loading</h1>
                }
            <h1>Drink Menu</h1>
                {
                menuData.flag ? 
                menuData.drinkData.map(item =>{
                    return <li key = {item.drinkName}>
                        Drink Name is {item.drinkName}, Price: {item.price}, Category: {item.category}
                    </li>
                }): <h1>Loading</h1>
                }        
        </div>
        </div>
    );
}
export default Restaurant;