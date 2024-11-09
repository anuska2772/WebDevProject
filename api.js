import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useDashBoardData(){
    const {data,error}=useSWR(process.env.NEXT_PUBLIC_API_URL, fetcher);
    return{
        data,
        isLoading: !error && !data,
        isError: error,
    };
}