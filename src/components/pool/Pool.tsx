import * as React from 'react'
import '../../assets/styles/index.css'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getExpandedRowModel
} from '@tanstack/react-table'
import {Text} from 'react-native'
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';

type Person = {
    "pool_id": number,
    "points": number,
    "username": string,
    "pool_rank_num": number,
    "user_id": string,
    "pool_rank_display": string,
    "event_id": number,
    "team_today_score_display": string,
    "team_total_score_display": string,
    "team_dropped_score_display": string,
    "league_id": number,
    "active": boolean,
    "winning_score_num": number,
    "winning_score_guess": number,
    "guess_difference": number,
    "pickedwinner": boolean
}

const defaultData: Person[] = [
  {
        "pool_id": 35,
        "points": 100.0,
        "username": "Alryates",
        "pool_rank_num": 1,
        "user_id": "05e4b4f1-95d9-44cb-87c3-323dfa0df9d3",
        "pool_rank_display": "🥇",
        "event_id": 27,
        "team_today_score_display": "-19",
        "team_total_score_display": "-85",
        "team_dropped_score_display": "-9",
        "league_id": 3,
        "active": false,
        "winning_score_num": -24,
        "winning_score_guess": -25,
        "guess_difference": 1,
        "pickedwinner": false
    },
    {
        "pool_id": 35,
        "points": 85.7,
        "username": "Sun_Day_Ned",
        "pool_rank_num": 2,
        "user_id": "8da03d5a-afcd-4dee-9569-610cc10799aa",
        "pool_rank_display": "🥈",
        "event_id": 27,
        "team_today_score_display": "-24",
        "team_total_score_display": "-83",
        "team_dropped_score_display": "+13",
        "league_id": 3,
        "active": false,
        "winning_score_num": -24,
        "winning_score_guess": -21,
        "guess_difference": 3,
        "pickedwinner": true
    },
    {
        "pool_id": 35,
        "points": 71.4,
        "username": "DirtyMike",
        "pool_rank_num": 3,
        "user_id": "92ca038c-f4c6-4df6-82e8-e052a321adef",
        "pool_rank_display": "🥉",
        "event_id": 27,
        "team_today_score_display": "-15",
        "team_total_score_display": "-82",
        "team_dropped_score_display": "+15",
        "league_id": 3,
        "active": false,
        "winning_score_num": -24,
        "winning_score_guess": -25,
        "guess_difference": 1,
        "pickedwinner": false
    },
    {
        "pool_id": 35,
        "points": 57.1,
        "username": "Zach",
        "pool_rank_num": 4,
        "user_id": "4f16714b-2599-4fb4-90a9-9738e468f0d6",
        "pool_rank_display": "4",
        "event_id": 27,
        "team_today_score_display": "-13",
        "team_total_score_display": "-72",
        "team_dropped_score_display": "+28",
        "league_id": 3,
        "active": false,
        "winning_score_num": -24,
        "winning_score_guess": -24,
        "guess_difference": 0,
        "pickedwinner": false
    },
    {
        "pool_id": 35,
        "points": 42.9,
        "username": "SwissDemon14",
        "pool_rank_num": 5,
        "user_id": "1a760260-2e92-42c9-bc96-df90606bac0e",
        "pool_rank_display": "5",
        "event_id": 27,
        "team_today_score_display": "-11",
        "team_total_score_display": "-71",
        "team_dropped_score_display": "+22",
        "league_id": 3,
        "active": false,
        "winning_score_num": -24,
        "winning_score_guess": -22,
        "guess_difference": 2,
        "pickedwinner": false
    },
    {
        "pool_id": 35,
        "points": 28.6,
        "username": "Ian",
        "pool_rank_num": 6,
        "user_id": "2679bbc6-b2dd-4d50-92bd-74e04477cef7",
        "pool_rank_display": "6",
        "event_id": 27,
        "team_today_score_display": "-12",
        "team_total_score_display": "-68",
        "team_dropped_score_display": "-2",
        "league_id": 3,
        "active": false,
        "winning_score_num": -24,
        "winning_score_guess": -24,
        "guess_difference": 0,
        "pickedwinner": false
    },
    {
        "pool_id": 35,
        "points": 14.3,
        "username": "sammy",
        "pool_rank_num": 7,
        "user_id": "003718e5-80bb-402d-afd5-7485adfe5e85",
        "pool_rank_display": "7",
        "event_id": 27,
        "team_today_score_display": "-16",
        "team_total_score_display": "-64",
        "team_dropped_score_display": "+22",
        "league_id": 3,
        "active": false,
        "winning_score_num": -24,
        "winning_score_guess": -25,
        "guess_difference": 1,
        "pickedwinner": false
    }
]

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('pool_rank_display', {
    header: () => '#',
    cell: info => info.getValue(),
    size: 10,
  }),
  columnHelper.accessor('username', {
    header: () => 'User',
    cell: info => info.getValue(),
  }),
 columnHelper.accessor('team_total_score_display', {
    header: () => 'Score',
    cell: info => info.getValue(),
    size: 10,
  }),
  columnHelper.accessor('team_today_score_display', {
    header: () => 'Today',
    cell: info => info.getValue(),
    size: 10,
  }),
 columnHelper.accessor('points', {
    header: () => 'Pts',
    cell: info => info.getValue(),
    size: 10,
  }),
]


export function PoolInner() {
    const [data, setData] = React.useState(() => [...defaultData])
    const [expanded, setExpanded] = React.useState({});
    const table = useReactTable({
        data,
        columns,
        state: { expanded },
        onExpandedChange: setExpanded,
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        getRowCanExpand: () => true,
    })

    const colCount = table.getVisibleLeafColumns().length;


    return(
    <>
        <ThemedText style={{display:'flex', justifyContent:'center', paddingBottom: 10}} type="default"><IconSymbol size={28} name="info.circle.fill" color={'black'} /> Click users to view picks</ThemedText>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <table style={{ } }>
            <thead style={{backgroundColor: "#174038", color: "white"}}>
            {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                    <th key={header.id}>
                    {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                        )}
                    </th>
                ))}
                </tr>
            ))}
            </thead>
            <tbody>
            {table.getRowModel().rows.map(row => (
                <React.Fragment key={row.id}>
                    <tr key={row.id} onClick={() => row.toggleExpanded()}>
                    {row.getVisibleCells().map(cell => {
                        const isUsername = cell.column.id === 'username';
                        return (
                        <td
                            key={cell.id}
                            style={{width: cell.column.getSize(), textAlign: isUsername ? 'left' : 'center'}}
                        >
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                        )
                    })}
                    </tr>
                    {row.getIsExpanded() && (
                        <tr>
                            <td colSpan={colCount}>
                            <NestedFourColTable parent={row.original} />
                            </td>
                        </tr>
                    )}
                </React.Fragment>
                
            ))}
            </tbody>
        </table>
        <div/>
        </div>
    </>
    )
}

function NestedFourColTable({ parent }: { parent: Person }) {

    type Player = {
        "pick_id": number,
        "user_id": string,
        "player_name": string,
        "tier": string,
        "cut": boolean,
        "withdrew": boolean,
        "dropped": boolean,
        "thruorteetime": string,
        "pool_id": number,
        "username": string,
        "player_id": number,
        "rank": number,
        "today_score_num": number,
        "today_score_display": string,
        "total_score_num": number,
        "total_score_display": string,
        "event_id": number
    }

  const nestedRows: Player[] = [
    {
        "pick_id": 8318,
        "user_id": "4f16714b-2599-4fb4-90a9-9738e468f0d6",
        "player_name": "Stephan Jaeger",
        "tier": "D",
        "cut": false,
        "withdrew": false,
        "dropped": false,
        "thruorteetime": "F",
        "pool_id": 35,
        "username": "Zach",
        "player_id": 36799,
        "rank": 6,
        "today_score_num": -2,
        "today_score_display": "-2",
        "total_score_num": -9,
        "total_score_display": "-9",
        "event_id": 27
    },
    {
        "pick_id": 8315,
        "user_id": "4f16714b-2599-4fb4-90a9-9738e468f0d6",
        "player_name": "Samuel Stevens",
        "tier": "A",
        "cut": true,
        "withdrew": false,
        "dropped": true,
        "thruorteetime": "-",
        "pool_id": 35,
        "username": "Zach",
        "player_id": 55893,
        "rank": 7,
        "today_score_num": 6,
        "today_score_display": "CUT (+6)",
        "total_score_num": 14,
        "total_score_display": "+14",
        "event_id": 27
    },
    {
        "pick_id": 8322,
        "user_id": "4f16714b-2599-4fb4-90a9-9738e468f0d6",
        "player_name": "Ryan Palmer",
        "tier": "H",
        "cut": true,
        "withdrew": false,
        "dropped": true,
        "thruorteetime": "-",
        "pool_id": 35,
        "username": "Zach",
        "player_id": 23320,
        "rank": 8,
        "today_score_num": 6,
        "today_score_display": "CUT (+6)",
        "total_score_num": 14,
        "total_score_display": "+14",
        "event_id": 27
    }
  ];

  return (
    <div>
        <table>
            <thead style={{backgroundColor: "#174038", color: "white"}}>
                <tr>
                    <th style={{backgroundColor: "#174038", color: "white"}}>Tier</th>
                    <th style={{backgroundColor: "#174038", color: "white"}}>Players</th>
                    <th style={{backgroundColor: "#174038", color: "white"}}>Score</th>
                    <th style={{backgroundColor: "#174038", color: "white"}}>Today</th>
                    <th style={{backgroundColor: "#174038", color: "white"}}>Thru</th>
                </tr>
            </thead>
            <tbody>
                {nestedRows.sort((a, b) => a.tier.localeCompare(b.tier)).map((r, i) => (
                    <tr key={i}>
                    <td style={{textAlign: 'center'}}>{r.tier}</td>
                    <td style={{textAlign: 'left'}}>{r.player_name}</td>
                    <td style={{textAlign: 'center'}}>{r.total_score_display}</td>
                    <td style={{textAlign: 'center'}}>{r.today_score_display}</td>
                    <td style={{textAlign: 'center'}}>{r.thruorteetime}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <td colSpan={5} style={{backgroundColor: "#174038", color: "white", textAlign: 'center'}}>
                    <Text style={{ backgroundColor: '#174038', color: 'white'}}>{"Tiebreaking guess: " + parent.winning_score_guess + (parent.guess_difference === 0 ? " (Correct)" : " (" + parent.guess_difference + " off)")}</Text>
                </td>
            </tfoot>
        </table>
    </div>
  );
}