interface NotifiData {
    id: 1,
    avatar: string
    name: string,
    body: string,
    seen: boolean,
    datetime: string,
    goto: number,
    buttonYes: boolean,
    buttonNo: boolean,
    linkYes: string,
    linkNo: string,
    group: number,
}

 type NotifiDataType = NotifiData;
 export default NotifiData;