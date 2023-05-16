import Sidebar from "../halamanadmin";
import {MdOutlineGroups,} from 'react-icons/md';
import {FaVimeoV,} from 'react-icons/fa';
import {FaPlayCircle} from 'react-icons/fa';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
    BiEdit,
    BiTrash,
    Type,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';
import { type } from "@testing-library/user-event/dist/type";


export default function ContentLeft(){
    const trailingActions = () => (
        <TrailingActions>
          <SwipeAction
            destructive={true}
            onClick={() => console.info('swipe action triggered')}
            >
            <div className="flex items-center px-4">
            <BiTrash size={20} color="white"/>
            </div>
          </SwipeAction>
          <SwipeAction
            destructive={true}
            onClick={() => console.info('swipe action triggered')}
            >
            <div className="flex items-center px-4">
            <BiTrash size={20} color="white"/>
            </div>
          </SwipeAction>
        </TrailingActions>
      );
    return(
        <section className="flex-1">
           
            <h2 className="text-2xl  pl-[30px] pt-5 text-white my-8">Welcome Back Aditya!</h2>

            <div className="flex flex-row space-x-4">
                <Card 
                bgColor={"bg-slate-200"}
                txtColor={"text-white"} 
                icon={<MdOutlineGroups size={40}/>} 
                label={
                <span className="text-sm">
                    Team
                </span>
            }
            />
             <Card 
                bgColor={"bg-slate-200"}
                txtColor={"text-white"} 
                icon={<FaPlayCircle size={40}/>} 
                label={
                <span className="text-sm">
                    Drakor
                </span>
            }
            />
             <Card 
                bgColor={"bg-slate-200"}
                txtColor={"text-white"} 
                icon={<FaVimeoV size={40}/>} 
                label={
                <span className="text-sm">
                    Anime
                </span>
            }
            />
            </div>
            <div className="pl-10 pr-[70px]">
                <div className="rounded-2xl bg-slate-700">
            <SwipeableList threshold={0.9} type={Type.IOS}>
  <SwipeableListItem trailingActions={trailingActions()}>
   <div className="bg-slate-700 p-4 rounded-xl border border-gray-200 w-full flex">
    <img src={"https://static.zerochan.net/chaosringen.full.2304265.jpg"} alt="img" className="w-10 h-10 rounded-full object-cover mr-3"
    />
    <div className="text-sm ml-3">
        <div className="text-white">Zerochan</div>
        <div className="text-slate-400">12345678</div>
    </div>
   </div>
    </SwipeableListItem>
    </SwipeableList>
                 </div>
            </div>
        </section>
        
    );
}

function Card(props){
    return(
        <div className={`rounded ${props.txtColor} ${props.bgColor} bg-opacity-10 p-5 w-64 h-48 ml-10 space-y-4`}>
    <div>{props.icon}</div>
    <div>{props.label}</div>
       
    </div>

    );
}