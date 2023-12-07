import { FileText, X, Download } from 'lucide-react';
import { motion } from "framer-motion"

export default function Card({ desc, size, download, reference, tag, tagText,color }) {
  return (
    <motion.div drag
      dragConstraints={reference}
      dragElastic={0.2}
      dragMomentum={true}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className='flex flex-shrink-0 flex-col justify-between text-zinc-300 w-[220px] h-[40vh] rounded-3xl overflow-hidden bg-zinc-800'>
      <div className="p-4 flex justify-between flex-col row-span-4">
        <FileText className='mb-2' />
        <p>{desc}</p>
      </div>
      <div>
        <div className='flex justify-between px-4 py-2 text-sm'>
          <p>{size}</p>
          {
            download ? <Download /> : <X />
          }
        </div>
        {
          (tag && tagText) ? <p className={`h-10 text-black font-semibold relative bottom-0 py-2 px-6 ${color}`}>{tagText}</p> : <p className={`h-10 py-2 px-4 ${color}`}>{" "}</p>
        }
      </div>
    </motion.div>
  )
}
