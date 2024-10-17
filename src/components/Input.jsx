export default function Input({ label, invalid, ...props }) {
    let classLabel="block mb-2 text-xs font-bold tracking-wide uppercase"
    let classInput="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300"
    if (invalid){
        classLabel+=" text-red-400";
        classInput+="text-red-500 bg-red-100 border-red-300";
    } else {
        classLabel+="text-stone-300";
        classInput+="text-gray-700 bg-stone-300";
    }

    return (
      <p>
        <label className={classLabel}>{label}</label>
        <input className={classInput} {...props} />
      </p>
    );
  }