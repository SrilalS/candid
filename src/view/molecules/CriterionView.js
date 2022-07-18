import { useState } from "react";

import Card from "@mui/material/Card";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Weight from "../../nonview/core/Weight"
import { t } from "../../nonview/base/I18N";
import Stack from '@mui/material/Stack';

const MARKS_RAW = [
  { value: 50, label: "Desirable" },
  { value: 0, label: "Neutral" },
  { value: -50, label: "Undesirable" },
];

export default function CriterionView({
  iCriterion,
  criterionID,
  onChangeCriterionWeight,
  criterionWeights,
}) {
  const [criterionWeight, setCriterionValue] = useState(
    criterionWeights[iCriterion]
  );

  const marks = MARKS_RAW.map(function ({ value, label }) {
    return {
      value,
      label: <Typography sx={{ fontSize: "50%" }}>{t(label)}</Typography>,
    };
  });

  const onChange = function (e) {
    setCriterionValue(parseInt(e.target.value));
  };

  const onChangeCommitted = function (e) {
    onChangeCriterionWeight(iCriterion, criterionWeight);
  };

  const color = Weight.getColor(criterionWeight);

  return (
    <Card sx={{ m: 1, p: 2 }}>
      <Typography variant="body2">{(iCriterion + 1) + '. '+ t(criterionID)}</Typography>
      <Slider
        value={criterionWeight}
        min={-100}
        max={100}
        marks={marks}
        onChange={onChange}
        onChangeCommitted={onChangeCommitted}
        color="neutral"
      />
      <Stack direction="column" sx={{textAlign: "right"}} color={color}>
      <Typography variant="h6">
        {Weight.signed(criterionWeight)}
      </Typography>
      <Typography   variant="caption">
        {t(Weight.getQualitativeText(criterionWeight))}
      </Typography>
      </Stack>
    </Card>
  );
}
