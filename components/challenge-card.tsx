import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type CardProps = React.ComponentProps<typeof Card>;

export function ChallengeCard({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn('w-[350px]', 'relative overflow-hidden', className)}
      {...props}
    >
      <CardHeader>
        <CardTitle>🪣 S3 Challenge</CardTitle>
        <CardDescription className="line-clamp-3">
          This challenge is to create an S3 Bucket that will host objects that
          wont be frequently accessed. This text will be truncated and blurred
          after two lines.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Badge variant="secondary">Easy</Badge>
      </CardContent>
    </Card>
  );
}
