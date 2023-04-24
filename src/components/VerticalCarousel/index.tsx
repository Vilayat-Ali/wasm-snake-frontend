// lib
import type {NextPage} from 'next';
import Image from 'next/image';
import { useId } from 'react';

type Props = {
    images: string[]
}

const VerticalCarousel: NextPage<Props> = (props) => {
    const id: string = useId();

    return (
        <div className="h-96 carousel carousel-vertical rounded-box">
            {
                props.images.map((img: string, index: number) => (
                    <div className="carousel-item h-full" key={id}>
                            <Image src={img} alt={`carousel-element-${index}`} />
                    </div> 
                ))
            }
        </div>
    )
}

export default VerticalCarousel