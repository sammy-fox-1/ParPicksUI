import { Text } from 'react-native';

export function Rules() {
    return(
        <>
            <Text style={{fontSize:18}}><b>Pool Tiebreakers</b></Text>
            <Text style={{fontSize:18}}><b>1.</b> The user with the closest winning score guess.</Text>
            <Text style={{fontSize:18}}><b>2.</b> Compares each user's top player score. If those players are tied, compares the second-best score, then the third-best, and so on. This continues through the complete list of players until a tie is broken, including "dropped" players if necessary.</Text>
            <Text style={{fontSize:18}}><b>3.</b> Finally, if 2 users have the exact same scores (or players), the user that picked 1st wins the tiebreaker.{'\n'}{'\n'}</Text>
            <Text style={{fontSize:18}}>Each week, players are divided into 6 or 8 tiers. For <b>standard events</b> there are 8 tiers (A-H) and for <b>limited-field events</b> there are 6 (A-F).{'\n'}{'\n'}</Text>
            <Text style={{fontSize:18}}>On Tuesday morning, tiers for the upcoming week will be published.{'\n'}{'\n'}</Text>
            <Text style={{fontSize:18}}>You will pick a player in each tier and submit your guess for the winning score as a tiebreaker.{'\n'}{'\n'}</Text>
            <Text style={{fontSize:18}}>In <b>standard events</b>, your two worst players' scores will be dropped. In <b>limited-field events</b>, your worst player's score will be dropped. Your score for the week is the combined score of your remaining players.{'\n'}{'\n'}</Text>
            <Text style={{fontSize:18}}><b>Cuts</b></Text>
            <Text style={{fontSize:18}}>For events with a cut, a <b>dynamic cut penalty</b> will be applied to scores.{'\n'}{'\n'}</Text>
            <Text style={{fontSize:18}}>Players will be penalized by their number of strokes outside the cutline. For example, a player missing the cut by 3 strokes will be penalized +3 Saturday and +3 Sunday.{'\n'}{'\n'}</Text>
            <Text style={{fontSize:18}}><b>Picks must be submitted before the first teetime.</b> If one of your picks withdraws before the event starts, a random player from that tier will replace them. If they withdraw after the event starts, they will be given a +20 score for the week and likely be your dropped player.</Text>
        </>
    )
}