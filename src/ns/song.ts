import { Ableton } from "..";
import { Namespace } from ".";

export type Property =
  | "appointed_device"
  | "arrangement_overdub"
  | "back_to_arranger"
  | "can_capture_midi"
  | "can_jump_to_next_cue"
  | "can_jump_to_prev_cue"
  | "can_redo"
  | "can_undo"
  | "canonical_parent"
  | "clip_trigger_quantization"
  | "count_in_duration"
  | "cue_points"
  | "current_song_time"
  | "exclusive_arm"
  | "exclusive_solo"
  | "groove_amount"
  | "is_counting_in"
  | "is_playing"
  | "last_event_time"
  | "loop"
  | "loop_length"
  | "loop_start"
  | "master_track"
  | "metronome"
  | "midi_recording_quantization"
  | "nudge_down"
  | "nudge_up"
  | "overdub"
  | "punch_in"
  | "punch_out"
  | "re_enable_automation_enabled"
  | "record_mode"
  | "return_tracks"
  | "root_note"
  | "scale_name"
  | "scenes"
  | "select_on_launch"
  | "session_automation_record"
  | "session_record"
  | "session_record_status"
  | "signature_denominator"
  | "signature_numerator"
  | "song_length"
  | "swing_amount"
  | "tempo"
  | "tracks"
  | "view"
  | "visible_tracks";

export type ObservableProperty =
  | "appointed_device"
  | "arrangement_overdub"
  | "back_to_arranger"
  | "can_capture_midi"
  | "can_jump_to_next_cue"
  | "can_jump_to_prev_cue"
  | "clip_trigger_quantization"
  | "count_in_duration"
  | "cue_points"
  | "current_song_time"
  | "data"
  | "exclusive_arm"
  | "groove_amount"
  | "is_counting_in"
  | "is_playing"
  | "loop_length"
  | "loop"
  | "loop_start"
  | "metronome"
  | "midi_recording_quantization"
  | "nudge_down"
  | "nudge_up"
  | "overdub"
  | "punch_in"
  | "punch_out"
  | "re_enable_automation_enabled"
  | "record_mode"
  | "return_tracks"
  | "scenes"
  | "session_automation_record"
  | "session_record"
  | "session_record_status"
  | "signature_denominator"
  | "signature_numerator"
  | "song_length"
  | "swing_amount"
  | "tempo"
  | "tracks"
  | "visible_tracks";

export class Song extends Namespace<Property, ObservableProperty> {
  constructor(ableton: Ableton) {
    super(ableton, "song");
  }

  async jumpToCue(time: number) {
    return this.ableton.sendCommand(this.ns, "jump_to_cue", { time });
  }
}
