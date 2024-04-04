import Image from 'next/image'

import img1 from './../../../public/Image/Phone Mockup (1).png'
import img2 from './../../../public/Image/Phone Mockup (2).png'
import img3 from './../../../public/Image/Phone Mockup (3).png'
import img4 from './../../../public/Image/Phone Mockup (4).png'
import img5 from './../../../public/Image/Phone Mockup (5).png'
import img6 from './../../../public/Image/Phone Mockup (6).png'
import img7 from './../../../public/Image/Phone Mockup.png'
import img8 from './../../../public/Image/Phone Mockup1.png'
import img9 from './../../../public/Image/Phone Mockup (7).png'

const AllPhone = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 gap-1'>               
                <Image src={img1}></Image>
                <Image src={img8}></Image>
                <Image src={img3}></Image>
                <Image src={img4}></Image>
                <Image src={img5}></Image>
                <Image src={img6}></Image>
                <Image src={img7}></Image>
                <Image src={img1}></Image>
                <Image src={img2}></Image>
                <Image src={img9}></Image>
                
            </div>
        </div>
    );
};

export default AllPhone;