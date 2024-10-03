import { useEffect, useMemo } from 'react';

const createConnection = () => {
  // 실제 구현은 정말로 채팅 서버에 연결하는 것이 되어야 합니다.
  return {
    connect() {
      console.log('✅ 연결 중...');
    },
    disconnect() {
      console.log('❌ 연결 해제됨');
    }
  };
};

export default function ChatRoom() {
  const memoizedFilterList = useMemo(() => {
    console.time('filter');
    const result = testList.filter((item) => item.id > 10);
    console.timeEnd('filter');
    return result;
  }, []);

  console.log(memoizedFilterList);

  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, []);
  return <h1>채팅에 오신걸 환영합니다!</h1>;
}

const testList = [
  {
    id: 1,
    name: 'test1'
  },
  {
    id: 2,
    name: 'test2'
  },
  {
    id: 3,
    name: 'test3'
  },
  {
    id: 4,
    name: 'test4'
  },
  {
    id: 5,
    name: 'test5'
  },
  {
    id: 6,
    name: 'test6'
  },
  {
    id: 7,
    name: 'test7'
  },
  {
    id: 8,
    name: 'test8'
  },
  {
    id: 9,
    name: 'test9'
  },
  {
    id: 10,
    name: 'test10'
  },
  {
    id: 11,
    name: 'test11'
  },
  {
    id: 12,
    name: 'test12'
  },
  {
    id: 13,
    name: 'test13'
  },
  {
    id: 14,
    name: 'test14'
  },
  {
    id: 15,
    name: 'test15'
  },
  {
    id: 16,
    name: 'test16'
  },
  {
    id: 17,
    name: 'test17'
  },
  {
    id: 18,
    name: 'test18'
  },
  {
    id: 19,
    name: 'test19'
  },
  {
    id: 20,
    name: 'test20'
  }
];
