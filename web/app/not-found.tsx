import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container size="narrow">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary-600 font-heading">404</h1>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            페이지를 찾을 수 없습니다
          </h2>
          <p className="mt-4 text-gray-600">
            요청하신 페이지가 존재하지 않거나 이동되었습니다.
          </p>
          <div className="mt-8">
            <Link href="/">
              <Button size="lg">홈으로 돌아가기</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
