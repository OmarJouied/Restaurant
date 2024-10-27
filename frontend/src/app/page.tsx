import Card from "@/components/Card";
import CardProps from "@/types/CardProps";
import Link from "next/link";

export default async function Home({ searchParams: { q } }: { searchParams: { q: string } }) {
  const res = await fetch(process.env.BACKEND_HOST!);
  const { foods }: { foods: CardProps[] } = await res.json();

  return (
    foods.filter(food => food.title.includes(q ?? "")).map(food => (
      <Card key={food.id} {...food}>
        <div className="py-4 flex justify-between items-center gap-2.5">
          <p>Chef <Link href={'/'} className="text-[#00CCFF] underline">{food.chef}</Link></p>
          <Link href={`/${food.title.toLowerCase().replaceAll(' ', '-')}-id-${food.id}`} className="bg-error text-white py-2 px-4 rounded-lg">Détails</Link>
        </div>
      </Card>
    ))
  );
}
