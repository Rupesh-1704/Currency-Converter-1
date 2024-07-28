import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/3a03417b2825438b0f2b643f/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                if (res && res.conversion_rates) {
                    setData(res.conversion_rates);
                } else {
                    console.error("Invalid API response:", res);
                    setData(null);
                }
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                setData(null);
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
