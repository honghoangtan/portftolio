
import { BsArrowDownRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const services = [
    {
        num: '01',
        title: 'Web development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eaque tenetur',
        href: ""
    },
    {
        num: '02',
        title: 'UI/UX Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eaque tenetur',
        href: ""
    },
    {
        num: '03',
        title: 'Logo Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eaque tenetur',
        href: ""
    },
    {
        num: '04',
        title: 'SEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eaque tenetur',
        href: ""
    }
]

function Services() {
    return ( 
        <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: 1, 
                        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn'}
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {
                        services.map((service, index) => {
                            return (
                                <div key={index} className="flex flex-1 flex-col justify-center gap-6 group">
                                    {/* top */}
                                    <div className="w-full flex justify-between items-center">
                                        <div 
                                            className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover
                                                transition-all duration-500"
                                        >
                                            {service.num}
                                        </div>
                                        <Link 
                                            href={service.href}
                                            className="w-[70px] h-[70px] bg-white rounded-full flex justify-center items-center
                                                group-hover:bg-accent transition-all duration-500 hover:-rotate-45"
                                        >
                                            <BsArrowDownRight className="text-primary text-3xl" />
                                        </Link>
                                    </div>

                                    {/* title */}
                                    <h2
                                        className="text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500"
                                    >{service.title}</h2>

                                    {/* description */}
                                    <p className="text-white/60">{service.description}</p>

                                    {/* boder */}
                                    <div className="border-b border-white/20 w-full"></div>
                                </div>
                            )
                        })
                    }
                </motion.div>
            </div>
        </div>
     );
}

export default Services;