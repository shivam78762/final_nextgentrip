import Image from "next/image";
import Link from "next/link";

const InfoSection = () => {
  return (
    <div className="px-5 md:px-28 lg:md:px-10 lg:px-52  pb-8 pt-0 lg:pt-8">
      <div className="block md:flex  gap-5">
        <div
          className="w-full md:w-1/2 py-3 px-5 gap-5  h-[100px] flex items-start rounded-tl-[35px] rounded-md custom-bg"       
        >
          <div className="mr-6 pt-4">
            <Image
              src="/images/important.svg"
              width={45}
              height={45}
              alt=""
            />
          </div>
          <div>
            <div className="font-semibold text-lg mb-1">Update Info:</div>
            <div className="text-gray-700 text-sm">
             Last Update of Site
              <span>
                <Link
                 href="/last-update"
                  className="text-blue-500"
                >
                  &nbsp; Click here...
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 py-3 px-5 gap-5  h-[100px] flex items-start rounded-tl-[35px] rounded-md custom-bg"
          
        >
          <div className="mr-6 pt-4">
            <Image
              src="/images/trvl-guid.svg"
              width={50}
              height={45}
              alt=""
            />
          </div>
          <div>
            <div className="font-semibold  mb-1">Travel Guide</div>
            <div className="text-gray-700 text-sm mb-2">
              Get latest information on airlines &amp; airports guidelines,
              state-wise quarantine rules, travel checklists
              <span>
                <Link
               href="/web-check/"
                  className="text-blue-500"
                >
                  &nbsp; Click here...
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
