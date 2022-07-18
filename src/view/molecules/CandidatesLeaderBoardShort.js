import Stack from '@mui/material/Stack';

import Candidate from "../../nonview/core/Candidate"
import Avatar from '@mui/material/Avatar';
const AVATAR_SIZE = 24;
export default function CandidatesLeaderBoardShort({candidateAndScore}) {
  return (
    <Stack direction="row" gap={1}>
      {candidateAndScore.slice(0, 3).map(
        function([candidateId, score]) {
          const key = 'candidate-' + candidateId;
          const candidate = Candidate.fromId(candidateId);
          return <Avatar key={key} src={candidate.imgSrc} sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}/>;
        }
      )}
    </Stack>
  );
}
