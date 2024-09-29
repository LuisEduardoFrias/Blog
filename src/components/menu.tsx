// 
"use client"
import { ReactElement, ChangeEvent, useId, useState, useEffect } from 'react'
import Link from 'next/link'
import ArrowIndicatorSvg from 'svg/arrow_indicator_svg'
import MenuSvg from 'svg/menu_svg'
import CloseSvg from 'svg/close_svg'
import 'st/components/menu.css'

export type TOption = {
  url: string | null,
  name: string,
  options: TOption[] | null,
}

type TMenuProps = {
  children: ReactElement,
  options: TOption[]
}

type TCheckOption = {
  key: string,
  value: boolean,
  level: number
}

type TSplitArray = {
  leftOptions: TOption[],
  rightOptions: TOption[]
};

function AddPropToggle(options: TOption[]): TOptionToggle[] {
  let index = 0, level = 0;

  function intoAddPropToggle(opti: TOption[]): TOptionToggle[] {
    level += 1;
    return (opti?.map((opt: TOption) => {
      index += 1;

      const clone = { ...opt };

      Reflect.set(clone, 'toggle', false);
      Reflect.set(clone, 'id', index);
      Reflect.set(clone, 'level', level);

      if (!clone.options)
        Reflect.set(clone, 'options', null);

      if (clone.options) {
        clone.options = intoAddPropToggle(clone.options);
        level -= 1;
      }

      return clone;
    })) as TOptionToggle[];
  }

  return intoAddPropToggle(options)
}

function AddNullOptions(options: TOption[]): TOptionToggle[] {

  function intoAddPropToggle(opti: TSplitArray[]): TOptionToggle[] {
    return (opti?.map((opt: TOption) => {
      const clone = { ...opt };

      if (!clone.options)
        Reflect.set(clone, 'options', null);

      if (clone.options) {
        clone.options = intoAddPropToggle(clone.options);
      }

      return clone;
    })) as TOptionToggle[];
  }

  return intoAddPropToggle(options)
}

function SplitArray(options: TOption[]): TSplitArray {
  const midIndex = Math.floor(options.length / 2);
  const leftOptions = options.slice(0, midIndex);
  const rightOptions = options.slice(midIndex);

  if (options.length % 2 !== 0) {
    rightOptions.unshift(options[midIndex]);
  }

  return { leftOptions, rightOptions };
}

export default function Menu({ children, options }: TMenuProps) {
  const [split, setSplit] = useState();

  useEffect(() => {
    setSplit(SplitArray(AddPropToggle(options)));
  }, [options]);

  function handleSubmenuToggle(id: number, level: number) {
    setSplit(prev => {
      const options: TOptionToggle[] = prev?.leftOptions.concat(prev?.rightOptions);

      function offSubmenu(opts): TOptionToggle[] {
        return opts?.map(opt => {
          const op = { ...opt };

          if (op.id === id) {
            op.toggle = !op.toggle;
          }
          else {
            if (op.level >= level)
              op.toggle = false;
          }

          op.options = offSubmenu(op.options);
          return op;
        })
      }

      const splitOption: TOption[] = offSubmenu(options);

      return SplitArray(AddNullOptions(splitOption));
    });
  }

  return (
    <nav className="menu-container">
      {/*Logo*/}
      {
        <div id="logo-outside-menu">
          {children}
        </div>
      }
      {/*Mobile botton menu*/}
      {
        <div id="mobile-botton-menu-container">
          <label htmlFor="checkbox-ico" >
            <div id="container-menu-ico">
              <div id="svg-menu-ico" className="svg-ico">
                <MenuSvg id="svg-menu-ico-" size={({ width: 18, height: 18 })} />
              </div>
              <div id="svg-close-ico" className="svg-ico">
                <CloseSvg id="svg-close-ico-" size={({ width: 18, height: 18 })} />
              </div>
            </div>
          </label>
          <input id="checkbox-ico" type="checkbox"
            onChange={() => handleSubmenuToggle(0, 0)} />
        </div>
      }
      {/*Menu options*/}
      {
        <ul>
          {
            split?.leftOptions.map((opt: TOption, index: number) =>
              <Option key={index} option={opt} click={handleSubmenuToggle} />)
          }
          <div id="logo-insede-menu">
            {children}
          </div>
          {
            split?.rightOptions.map((opt: TOption, index: number) =>
              <Option key={index} option={opt} click={handleSubmenuToggle} />)
          }
        </ul>
      }
    </nav>
  )
}

/********************************************/

type TOptionToggle = {
  toggle: boolean | null,
  id: string,
} & TOption;

export function Option({ option: opt, click }: { option: TOptionToggle, click: (id: number) => void }) {
  const checkboxId = `checkbox-${opt.name}-${opt.id}`;

  return (
    <li className="li">
      {
        opt.options !== null ?
          <>
            <input id={checkboxId} type="checkbox" checked={opt.toggle} />
            <label htmlFor={checkboxId} className="link" onClick={() => click(opt.id, opt.level)}>
              {opt.name}
              <div className="indicator">
                <ArrowIndicatorSvg id="svg-arrow" size={({ width: 18, height: 18 })} />
              </div>
            </label>
          </> :
          <label className="link">
            <Link href={opt.url}>
              {opt.name}
            </Link>
          </label>
      }
      {
        opt.options !== null ?
          <nav className="submenu-container" style={{ zIndex: `9${opt.id}` }}>
            <ul>
              {
                opt.options?.map((option: TOptionToggle, index: number) =>
                  <Option key={index} option={option} click={click} />)
              }
            </ul>
          </nav> : null
      }
    </li>
  )
}