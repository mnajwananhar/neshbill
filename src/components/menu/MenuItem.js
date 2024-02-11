import Image from "next/image";

export default function MenuItem() {
  return (
    <div className="border p-5 bg-white-200  rounded-lg text-center hover:bg-gray-200 hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <Image
          width={100}
          height={100}
          s
          src="/whitePaperBag.png"
          className="max-h-auto max-h-29 block mx-auto"
          alt="Paper"
        />
      </div>
      <h4 className="font-semibold text-xl  my-3">Paper Bag</h4>
      <p className="text-gray-500 text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Beli Sekarang
      </button>
    </div>
  );
}
