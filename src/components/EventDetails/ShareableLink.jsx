import { useState } from "react";

const ShareableLink = ({ url }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {

        const el = document.createElement('textarea');
        el.value = url;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {

      console.error('Copy failed', err);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input readOnly value={url} className="flex-1 px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50" />
      <button onClick={copy} className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
};

export default ShareableLink