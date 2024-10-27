import Card from "@/components/Card"
import Order from "@/components/Order";
import CardProps from "@/types/CardProps";

const page = async ({ params: { slag } }: { params: { slag: string } }) => {
  const res = await fetch(`${process.env.BACKEND_HOST}/?slag=${slag}`);
  const { food }: { food: CardProps } = await res.json();

  return (
    <div className="shadow-[4px_4px_4px_rgb(0,0,0,.25)] rounded-[19px] bg-white w-[32rem] h-[32rem]">
      <Card asChild {...food}>
        <Order id={food.id!} price={food.price} />
      </Card>
      <div className="p-4">
        <p className="text-black/60">{food.description}</p>
      </div>
    </div>
  )
}

export default page