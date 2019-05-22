import { Ableton } from "..";
import { Namespace } from ".";

export type GettableProperty =
  | "arm"
  | "available_input_routing_channels"
  | "available_input_routing_types"
  | "available_output_routing_channels"
  | "available_output_routing_types"
  | "can_be_armed"
  | "can_be_frozen"
  | "can_show_chains"
  | "clip_slots"
  | "color"
  | "color_index"
  | "current_input_routing"
  | "current_input_sub_routing"
  | "current_monitoring_state"
  | "current_output_routing"
  | "current_output_sub_routing"
  | "devices"
  | "fired_slot_index"
  | "fold_state"
  | "group_track"
  | "has_audio_input"
  | "has_audio_output"
  | "has_midi_input"
  | "has_midi_output"
  | "implicit_arm"
  | "input_meter_left"
  | "input_meter_level"
  | "input_meter_right"
  | "input_routing_channel"
  | "input_routing_type"
  | "input_routings"
  | "input_sub_routings"
  | "is_foldable"
  | "is_frozen"
  | "is_grouped"
  | "is_part_of_selection"
  | "is_showing_chains"
  | "is_visible"
  | "mixer_device"
  | "mute"
  | "muted_via_solo"
  | "name"
  | "output_meter_left"
  | "output_meter_level"
  | "output_meter_right"
  | "output_routing_channel"
  | "output_routing_type"
  | "output_routings"
  | "output_sub_routings"
  | "playing_slot_index"
  | "solo"
  | "view";

export type SettableProperty =
  | "arm"
  | "available_input_routing_channels"
  | "available_input_routing_types"
  | "available_output_routing_channels"
  | "available_output_routing_types"
  | "can_be_armed"
  | "can_be_frozen"
  | "can_show_chains"
  | "canonical_parent"
  | "clip_slots"
  | "color"
  | "color_index"
  | "current_input_routing"
  | "current_input_sub_routing"
  | "current_monitoring_state"
  | "current_output_routing"
  | "current_output_sub_routing"
  | "devices"
  | "fired_slot_index"
  | "fold_state"
  | "group_track"
  | "has_audio_input"
  | "has_audio_output"
  | "has_midi_input"
  | "has_midi_output"
  | "implicit_arm"
  | "input_meter_left"
  | "input_meter_level"
  | "input_meter_right"
  | "input_routing_channel"
  | "input_routing_type"
  | "input_routings"
  | "input_sub_routings"
  | "is_foldable"
  | "is_frozen"
  | "is_grouped"
  | "is_part_of_selection"
  | "is_showing_chains"
  | "is_visible"
  | "mixer_device"
  | "mute"
  | "muted_via_solo"
  | "name"
  | "output_meter_left"
  | "output_meter_level"
  | "output_meter_right"
  | "output_routing_channel"
  | "output_routing_type"
  | "output_routings"
  | "output_sub_routings"
  | "playing_slot_index"
  | "solo"
  | "view";

export type ObservableProperty =
  | "arm"
  | "available_input_routing_channels"
  | "available_input_routing_types"
  | "available_output_routing_channels"
  | "available_output_routing_types"
  | "clip_slots"
  | "color_index"
  | "color"
  | "current_input_routing"
  | "current_input_sub_routing"
  | "current_monitoring_state"
  | "current_output_routing"
  | "current_output_sub_routing"
  | "data"
  | "devices"
  | "fired_slot_index"
  | "has_audio_input"
  | "has_audio_output"
  | "has_midi_input"
  | "has_midi_output"
  | "implicit_arm"
  | "input_meter_left"
  | "input_meter_level"
  | "input_meter_right"
  | "input_routing_channel"
  | "input_routing_type"
  | "input_routings"
  | "input_sub_routings"
  | "is_frozen"
  | "is_showing_chains"
  | "mute"
  | "muted_via_solo"
  | "name"
  | "output_meter_left"
  | "output_meter_level"
  | "output_meter_right"
  | "output_routing_channel"
  | "output_routing_type"
  | "output_routings"
  | "output_sub_routings"
  | "playing_slot_index"
  | "solo";

export class Track extends Namespace<
  GettableProperty,
  SettableProperty,
  ObservableProperty
> {
  constructor(ableton: Ableton, nsid: string) {
    super(ableton, "track", nsid);
  }
}
