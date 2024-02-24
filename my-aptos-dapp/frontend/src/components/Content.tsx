/* eslint-disable @typescript-eslint/no-explicit-any */
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Spin } from "antd";
import { useCallback, useEffect, useState } from "react";
import { aptos } from "../utils/consts";
import { Task, Buy } from "../utils/types";
import ListView from "../views/ListView";
import CardView from "../views/CardView";
import { ABI } from "../abi";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";


// Define your card data structure
type CardData = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

// Sample card data
const cards: CardData[] = [
  {
    id: 1,
    title: 'Card 1',
    description: 'Price: 4 ATP',
    imageUrl: img1,
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'Price: 3 ATP',
    imageUrl: img2,
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'Price: 4 ATP',
    imageUrl: img3,
  },
  {
    id: 4,
    title: 'Card 4',
    description: 'Price: 4 ATP',
    imageUrl: img4,
  },
  {
    id: 5,
    title: 'Card 5',
    description: 'Price: 4 ATP',
    imageUrl: img5,
  },
  {
    id: 6,
    title: 'Card 6',
    description: 'Price: 4 ATP',
    imageUrl: img5,
  },
  {
    id: 7,
    title: 'Card 7',
    description: 'Price: 4 ATP',
    imageUrl: img5,
  },
  {
    id: 8,
    title: 'Card 8',
    description: 'Price: 4 ATP',
    imageUrl: img5,
  },
  
  
];


export default function Content() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const { account } = useWallet();
  const accountAddr: `0x${string}` | null = account
    ? account.address.startsWith("0x")
      ? (account.address as `0x${string}`)
      : `0x${account.address}`
    : null;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountHasList, setAccountHasList] = useState<boolean>(false);
  const [transactionInProgress, setTransactionInProgress] =
    useState<boolean>(false);


  const [buyTransactionInProgress, setBuyTransactionInProgress] = useState<boolean>(false);
  const [buys, setBuys] = useState<Buy[]>([]);

  const fetchList = useCallback(async () => {
    if (!accountAddr) return [];
    try {
      const todoListResource = await aptos.getAccountResource({
        accountAddress: accountAddr,
        resourceType: `${ABI.address}::todolist::TodoList`,
      });
      setAccountHasList(true);
      setTasks(todoListResource.tasks as Task[]);
    } catch (e: any) {
      setAccountHasList(false);
    }
  }, [accountAddr]);

  useEffect(() => {
    fetchList();
  }, [account?.address, fetchList]);

  return (
    <>
    <Spin spinning={transactionInProgress || buyTransactionInProgress}>
      <CardView cards={cards} setBuyTransactionInProgress={setBuyTransactionInProgress} buys={buys} setBuys={setBuys}/>
        {/* <ListView
          setTransactionInProgress={setTransactionInProgress}
          tasks={tasks}
          setTasks={setTasks}
        /> */}
    </Spin>
    </>
  );
}
