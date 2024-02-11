export default function SectionHeaders({subHeader, mainHeader}){
    return(
        <>
            <h3 className="uppercase text-gray-500 font-semibold leading-4 mb-2">
                {subHeader}
            </h3>
            <h2 className="text-primary font-bold text-4xl italic">
                {mainHeader}
            </h2>
        </>
    );
}