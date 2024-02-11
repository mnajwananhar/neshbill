import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return(
        <section className="hero border-t mt-4">
            <div className="py-12 mt-10">
                <h1 className="text-4xl font-semibold ">
                    Everything<br /> 
                    is better<br /> 
                    with a&nbsp;
                    <span className="text-primary">
                        PaperBag
                    </span>
                </h1>
                <p className="my-6 text-gray-500 text-sm">
                    PaperBag is the missing piece that 
                    makes every day complete, 
                    a simple yet joy in life
                </p>
                <div className="flex gap-4 text-sm">
                    <button className="justify-center bg-primary flex items-center gap-2 text-white px-8 py-2 rounded-full">
                        BELANJA SEKARANG
                        <Right />
                    </button>
                    <button className="flex border-0 items-center gap-2 py-2 text-gray-600 font-semibold">
                        Pelajari Selengkapnya
                        <Right/>
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image src={'/shoppingBag.png'} layout={'fill'}
                 objectFit={'contain'} alt={'shoppingbag'} />
            </div>
        </section>
    );
}