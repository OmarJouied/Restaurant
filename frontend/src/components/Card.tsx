import CardProps from "@/types/CardProps"
import Image from "next/image"

const Card = ({ image, price, title, children, asChild }: CardProps & { children: React.ReactNode; asChild?: boolean }) => {
  return (
    <div className={`text-black flex overflow-hidden ${asChild ? "flex-row" : "bg-white w-64 h-[25.625rem] rounded-[19px] flex-col shadow-[4px_4px_4px_rgb(0,0,0,.25)]"}`}>
      <div className={`relative p-5 flex justify-end ${asChild ? "rounded-br-[19px] rounded-tl-[19px] overflow-hidden min-w-64 h-64" : "h-full"}`}>
        <Image src={`${process.env.BACKEND_HOST}${image}`} alt={title.toLowerCase().replace(' ', '-')} fill />
        <label className="relative z-10 p-3 flex items-center justify-center self-start cursor-pointer">
          <input type="checkbox" className="hidden peer" />
          <Image src={"/like.svg"} alt="liked" className="block peer-checked:hidden drop-shadow-lg" fill />
          <Image src={"/like-full.svg"} alt="liked full" className="hidden peer-checked:block drop-shadow-lg" fill />
        </label>
      </div>
      <div className="px-4 pb-4 flex flex-col justify-between flex-1">
        <div className="py-4 flex justify-between gap-2.5">
          <h2 className="font-semibold">{title}</h2>
          <p className="text-black/60 font-semibold">${price}</p>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Card