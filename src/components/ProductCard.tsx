import Image from 'next/image';
import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface PropsType {
    img: string;
    title: string;
    desc: string;
    rating: number;
    price: string;
}

// const generateRating = (rating: number) => {
//     switch (rating) {
//         case 1:
//             return (
//                 <div className="flex gap-1 text-[20px] text-[#FF9529]">
//                     <AiFillStar/>
//                     <AiOutlineStar/>
//                     <AiOutlineStar/>
//                     <AiOutlineStar/>
//                     <AiOutlineStar/>
//                 </div>
//             );
//             case 2:
//             return (
//                 <div className="flex gap-1 text-[20px] text-[#FF9529]">
//                     <AiFillStar/>
//                     <AiFillStar/>
//                     <AiOutlineStar/>
//                     <AiOutlineStar/>
//                     <AiOutlineStar/>
//                 </div>
//             );
//             case 3:
//             return (
//                 <div className="flex gap-1 text-[20px] text-[#FF9529]">
//                     <AiFillStar/>
//                     <AiFillStar/>
//                     <AiFillStar/>
//                     <AiOutlineStar/>
//                     <AiOutlineStar/>
//                 </div>
//             );
//             case 4:
//             return (
//                 <div className="flex gap-1 text-[20px] text-[#FF9529]">
//                     <AiFillStar/>
//                     <AiFillStar/>
//                     <AiFillStar/>
//                     <AiFillStar/>
//                     <AiOutlineStar/>
//                 </div>
//             );
//             case 5:
//             return (
//                 <div className="flex gap-1 text-[20px] text-[#FF9529]">
//                     <AiFillStar/>
//                     <AiFillStar/>
//                     <AiFillStar/>
//                     <AiFillStar/>
//                     <AiFillStar/>
//                 </div>
//             );

//             default:
//                 return null;
//     }
// }
const generateRating = (rating: number) => {
  return (
    <div className="flex gap-1 text-[20px] text-[#FF9529]">
      {[...Array(5)].map((_, index) =>
        index < rating ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />
      )}
    </div>
  );
};

const ProductCard: React.FC<PropsType> = ({img, title, desc, rating, price}) => {
  return <div className='px-4 w-80 border border-gray-500 rounded-xl max-w-[400px]'>
      <div>
        <Image
        className='w-full h-[250px] object-cover rounded-t-xl'
        src={img}
        width={400}
        height={250}
        alt={title}
        />
      </div>

      <div className="space-y-2 py-2">
        <h2 className='text-accent font-medium uppercase'>{title}</h2>
        <p className='text-gray-500 max-w-[150px]'>{desc}</p>
        <div>{generateRating(rating)}</div>

        <div className="font-bold flex gap-4">
            ${price}
            <del className='text-gray-500 font-normal'>${parseInt(price) + 50}.00</del>
        </div>
      </div>
    </div>
  
}

export default ProductCard
