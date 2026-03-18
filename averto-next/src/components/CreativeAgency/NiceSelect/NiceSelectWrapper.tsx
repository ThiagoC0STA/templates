"use client";

import { useEffect, useRef } from "react";

type NiceSelectInstance = {
  destroy: () => void;
};

interface Option {
  value: string;
  label: string;
}

interface NiceSelectWrapperProps {
  options?: Option[];
  defaultOption?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
  className?: string;
}

const NiceSelectWrapper = ({
  options = [],
  defaultOption = "",
  onChange,
  id,
  className: cls,
}: NiceSelectWrapperProps) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const instanceRef = useRef<NiceSelectInstance | null>(null);

  useEffect(() => {
    let isMounted = true;
    import("nice-select2").then(({ default: NiceSelect }) => {
      if (!isMounted || !selectRef.current) return;

      instanceRef.current = new NiceSelect(selectRef.current);
    });

    return () => {
      isMounted = false;
      if (instanceRef.current) {
        instanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <select
      id={id}
      ref={selectRef}
      onChange={onChange}
      defaultValue=""
      className={`nice-select ${cls}`}
    >
      <option value="" disabled>
        {defaultOption}
      </option>
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};
export default NiceSelectWrapper;
