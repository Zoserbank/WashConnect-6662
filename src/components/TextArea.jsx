import { useState, useEffect } from 'react';

export default function TextArea({ 
  value, 
  onChange, 
  placeholder, 
  className = "", 
  maxLength = 500,
  rows = 4
}) {
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(value.length);
  }, [value]);

  const handleChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxLength) {
      onChange(e);
      setCharCount(text.length);
    }
  };

  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-primary-500 ${className}`}
      />
      <div className="absolute bottom-2 right-2 text-sm text-gray-500">
        {charCount}/{maxLength}
      </div>
    </div>
  );
}