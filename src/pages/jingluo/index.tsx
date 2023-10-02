import { getJingLuo } from "@/common/utils";
import HeaderBar from "@/components/HeaderBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './index.scoped.css'

const JingLuo = (props) => {
  const { pName } = useParams();
  const [jingluo, setJingLuo] = useState<any>({});

  useEffect(() => {
    const jingluo = getJingLuo(pName);
    if (jingluo) {
      setJingLuo(jingluo);
    }

  }, [pName])

  return <div>
    <HeaderBar title={'十二时辰'} />
    {jingluo?.yuque ?
      <iframe src={jingluo?.yuque} className="yuque-frame"></iframe> :
      null
    }
  </div>
}

export default JingLuo;