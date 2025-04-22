import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(` https://v6.exchangerate-api.com/v6/8a2e4aed6e1fa2e640f02caf/latest/${currency}`)
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
