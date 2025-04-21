import { FaRegClock } from "react-icons/fa6";

const BlogCard = ({ blog }) => {
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options); // Output: "25 Jan 2024"
    };
    return (
        <div className="max-w-md rounded-3xl overflow-hidden bg-white shadow-sm border">
            <div className="relative">
                <img
                    src="https://s3-alpha-sig.figma.com/img/9ac0/4dff/e890e6e363bd5d027743ee51384f511c?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HmYyh8baZNa9siRSf-7tsX04ZQhw9FrD7WW23PD1SY1~1QSpI~eFkdZ9N5soszVJX6ehDG6NHVY~MHTEvOZ5M~xfwtyZ2N0FAU9y8X2WrBmMO2IFDkjQ0T6FVRR0eIRI8lAA2WxRBGwbZRKY3GjvB7Xy5bZaqgmA2opyjt8Fku97JbBJ1pMVdn96blY7vdRv0qiuA2u~yayPSDn9hK76afPvYW1-QizteTfjd-2c-h~f~4Czb2CLCXEPLnmk52Bkf3nsMC3um~UTf5TalxgKGju5wg7EVRCycaYTTAw86-X0WE89fGGuvHZyLxScjVkT-PKI0Cv0GreCqShYHaOkdA__"
                    alt="Blog image"
                    width={500}
                    height={300}
                    className="w-full h-[440] object-cover"
                />
                {/* top left card */}
                <div className="absolute top-0 right-0 flex items-center gap-2 py-2 px-6 bg-base-bg rounded-tr-2xl rounded-bl-2xl">
                    <FaRegClock className="text-lg text-primary-3" />
                    <p className="text-base font-medium text-primary-3">{blog?.read_time_minute} min read</p>
                </div>
            </div>

            <div className="p-5 group">
                <div className="flex items-center gap-3 mb-4">
                    <img
                        src={blog?.author.image}
                        alt="Ronald Richards"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div className="rounded-2xl">
                        <p className="font-medium text-gray-800">{blog?.author?.full_name}</p>
                        <p className="text-sm text-gray-500">{formatDate(blog?.created_at)}</p>
                    </div>
                    <div className="ml-auto flex gap-2">
                        <h3>UI/UX</h3>
                        <h3>Design</h3>
                    </div>
                </div>

                <h2 className="text-xl font-bold text-gray-900 leading-tight">
                    {blog?.title}
                </h2>
            </div>
        </div>
    )
}


export default BlogCard;