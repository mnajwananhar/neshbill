import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu(){
    return(
        <section div className="text-center">
            <div className="text-center mb-4 mt-20">
                <SectionHeaders
                    subHeader={'check out'}
                    mainHeader={'Our Best Sellers'}
                />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    );
}