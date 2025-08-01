import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export interface InfoCardProps {
  student: boolean;
  imageUrl: string;
  title: string;
  subtitle: string;
  href: string;
  className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  student,
  imageUrl,
  title,
  subtitle,
  href,
  className,
}) => {
  const imageShapeClass = student ? 'rounded-full' : 'rounded-lg';
  const imageSizeClass = 'h-[46px] w-[46px]';

  return (
    <Link
      href={href}
      className={cn(
        'flex w-[340px] items-center gap-x-4 p-3 rounded-xl border border-zinc-600 bg-zinc-950',
        'transition-all duration-300 hover:border-zinc-500 focus-visible:outline-none',
        className
      )}
    >
      <div className={cn('flex-shrink-0', imageSizeClass)}>
        <Image
          src={imageUrl}
          alt={`Logo de ${title}`}
          width={46}
          height={46}
          className={cn('h-full w-full object-cover', imageShapeClass)}
        />
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="font-semibold text-sm text-zinc-50 line-clamp-1 leading-[150%]">{title}</span>
        <span className="text-xs text-zinc-300 line-clamp-1 leading-[150%]">{subtitle}</span>
      </div>
    </Link>
  );
};