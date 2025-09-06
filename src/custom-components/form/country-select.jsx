import {useState} from "react";
import {countries} from "@/custom-components/form/data.js";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import ReactCountryFlag from "react-country-flag";

export const CountrySelect = () => {
    const [code, setCode] = useState('+234');
    const country = countries.find(country => country.telCode === code) || countries[0];

    return (
        <div className={`w-full h-fit`}>
            <Select value={code} onValueChange={setCode}>
                <SelectTrigger>
                    <SelectValue>
                        {country && (
                            <ReactCountryFlag
                                countryCode={country.code}
                                svg
                                style={{width: "2rem", height: "1.5rem", borderRadius: "50%"}}
                            />
                        )}
                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    {countries.map(country => (
                        <SelectItem key={country.name} value={country.telCode}>
                            <ReactCountryFlag
                                countryCode={country.code}
                                svg
                                style={{width: "2rem", height: "1.5rem", borderRadius: "50%"}}
                            />
                            <span>{country.name}</span>
                            <span>{country.telCode}</span>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}