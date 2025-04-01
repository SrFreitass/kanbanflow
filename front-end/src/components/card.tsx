import * as React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
    imageSrc: string;
    imageAlt?: string;
    title: string;
    description?:string;
    className?:string;
    imageClassName?:string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({
        imageSrc,
        imageAlt = "",
        title,
        description,
        className,
        imageClassName,
    },
    ref
    ) => {
        return  (
                <div
                    ref={ref}
                    className={cn('flex flex-col gap-1 bg-white p-4 rounded-[8px] w-72 drop-shadow-sm',className)}
                >
                <img className={cn('size-6 rounded-full',imageClassName)}
                    src={imageSrc}
                    alt={imageAlt}
                />
                <div className={cn('text-left overflow-auto break-words',className)}>
                    <h3 className="text-[1rem]">{title}</h3>
                    <p className="text-[#5A5A65] text-[14px]" >{description}</p>
                </div>
                </div>
            );
        }
);

Card.displayName = "Card";

export {Card};