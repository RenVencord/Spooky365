import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { Flex } from "@components/Flex";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { Margins } from "@utils/margins";
import { useForceUpdater } from "@utils/react";
import definePlugin, { OptionType } from "@utils/types";
import { React, TextInput, useState } from "@webpack/common";

const HALLOWEEN_2024_URLS: Record<string, string> = {
    message1: "https://canary.discord.com/assets/c269de500ca3cb7b.mp3",
    message3: "https://canary.discord.com/assets/4f53c2f31ea0cdd8.mp3",
    call_ringing: "https://canary.discord.com/assets/7a287e2f88531f25.mp3",
    call_calling: "https://canary.discord.com/assets/7a287e2f88531f25.mp3",
    deafen: "https://canary.discord.com/assets/514663b657bc4c7d.mp3",
    undeafen: "https://canary.discord.com/assets/4dfa756a71484219.mp3",
    mute: "https://canary.discord.com/assets/d5e69d2c2aac0a27.mp3",
    unmute: "https://canary.discord.com/assets/6f0d538ed066a1a6.mp3"
};

function applyMasterPreset(preset: string) {
    if (preset === "halloween_2024") {
        settings.store.messageSound = "halloween_2024";
        settings.store.ringSound = "halloween_2024";
        settings.store.deafenSound = "halloween_2024";
        settings.store.muteSound = "halloween_2024";
        settings.store.voiceSound = "halloween_classic";
    } else if (preset === "halloween_classic") {
        settings.store.messageSound = "halloween_classic";
        settings.store.ringSound = "halloween_classic";
        settings.store.deafenSound = "halloween_classic";
        settings.store.muteSound = "halloween_classic";
        settings.store.voiceSound = "halloween_classic";
    } else if (preset === "winter") {
        settings.store.messageSound = "default";
        settings.store.ringSound = "winter";
        settings.store.deafenSound = "winter";
        settings.store.muteSound = "winter";
        settings.store.voiceSound = "winter";
    } else if (preset === "doggo") {
        settings.store.messageSound = "doggo";
        settings.store.ringSound = "doggo";
        settings.store.deafenSound = "doggo";
        settings.store.muteSound = "doggo";
        settings.store.voiceSound = "default";
    } else if (preset === "retro") {
        settings.store.messageSound = "retro";
        settings.store.ringSound = "default";
        settings.store.deafenSound = "default";
        settings.store.muteSound = "default";
        settings.store.voiceSound = "default";
    } else if (preset === "ducky") {
        settings.store.messageSound = "ducky";
        settings.store.ringSound = "default";
        settings.store.deafenSound = "default";
        settings.store.muteSound = "default";
        settings.store.voiceSound = "default";
    } else if (preset === "bop") {
        settings.store.messageSound = "bop";
        settings.store.ringSound = "default";
        settings.store.deafenSound = "default";
        settings.store.muteSound = "default";
        settings.store.voiceSound = "default";
    } else if (preset === "lofi") {
        settings.store.messageSound = "lofi";
        settings.store.ringSound = "default";
        settings.store.deafenSound = "default";
        settings.store.muteSound = "default";
        settings.store.voiceSound = "default";
    } else if (preset === "asmr") {
        settings.store.messageSound = "asmr";
        settings.store.ringSound = "default";
        settings.store.deafenSound = "default";
        settings.store.muteSound = "default";
        settings.store.voiceSound = "default";
    } else if (preset === "discodo") {
        settings.store.messageSound = "discodo";
        settings.store.ringSound = "default";
        settings.store.deafenSound = "default";
        settings.store.muteSound = "default";
        settings.store.voiceSound = "default";
    } else if (preset === "default") {
        settings.store.messageSound = "default";
        settings.store.ringSound = "default";
        settings.store.deafenSound = "default";
        settings.store.muteSound = "default";
        settings.store.voiceSound = "default";
        settings.store.cameraSound = "default";
        settings.store.pttSound = "default";
        settings.store.streamSound = "default";
        settings.store.activitySound = "default";
        settings.store.stageSound = "default";
    }
}

const settings = definePluginSettings({
    masterPreset: {
        type: OptionType.SELECT,
        description: "Master Soundpack (changes all sound categories at once)",
        options: [
            { label: "🎃 Halloween (2024 Special URLs)", value: "halloween_2024", default: true },
            { label: "👻 Halloween (Classic Discord Built-in)", value: "halloween_classic" },
            { label: "❄️ Winter Holiday (Discord Built-in)", value: "winter" },
            { label: "🐶 Doggo (Bark & Arcade Music)", value: "doggo" },
            { label: "👾 Retro (8-Bit)", value: "retro" },
            { label: "🦆 Ducky (Quack)", value: "ducky" },
            { label: "🫧 Bubble (Bop)", value: "bop" },
            { label: "🎧 Lofi", value: "lofi" },
            { label: "🎙️ ASMR", value: "asmr" },
            { label: "🤖 Discodo", value: "discodo" },
            { label: "🔈 Default Discord", value: "default" },
            { label: "🎛️ Custom (Mix & Match)", value: "custom" }
        ],
        onChange(val: string) {
            applyMasterPreset(val);
        }
    },
    messageSound: {
        type: OptionType.SELECT,
        description: "Message & Notification Sound",
        options: [
            { label: "Default Discord", value: "default" },
            { label: "🎃 Halloween 2024", value: "halloween_2024", default: true },
            { label: "👻 Halloween Classic", value: "halloween_classic" },
            { label: "🐶 Doggo Bark", value: "doggo" },
            { label: "👾 Retro 8-Bit", value: "retro" },
            { label: "🦆 Ducky Quack", value: "ducky" },
            { label: "🫧 Bubble (Bop)", value: "bop" },
            { label: "🎧 Lofi Chime", value: "lofi" },
            { label: "🎙️ ASMR Tap", value: "asmr" },
            { label: "🤖 Discodo", value: "discodo" },
            { label: "Custom URL", value: "custom" }
        ]
    },
    ringSound: {
        type: OptionType.SELECT,
        description: "Call & Ringtone Sound (Incoming & Outgoing)",
        options: [
            { label: "Default Discord", value: "default" },
            { label: "🎃 Halloween 2024", value: "halloween_2024", default: true },
            { label: "👻 Halloween Classic", value: "halloween_classic" },
            { label: "❄️ Winter Holiday Ring", value: "winter" },
            { label: "🐶 Doggo Arcade Music", value: "doggo" },
            { label: "🎶 Snow Halation Ring", value: "snow_halation" },
            { label: "🎄 Snowsgiving Ring", value: "snowsgiving" },
            { label: "🥁 Ringing Beat", value: "beat" },
            { label: "Custom URL", value: "custom" }
        ]
    },
    deafenSound: {
        type: OptionType.SELECT,
        description: "Deafen & Undeafen Sound",
        options: [
            { label: "Default Discord", value: "default" },
            { label: "🎃 Halloween 2024", value: "halloween_2024", default: true },
            { label: "👻 Halloween Classic", value: "halloween_classic" },
            { label: "❄️ Winter Holiday", value: "winter" },
            { label: "🐶 Doggo Death / Hurt", value: "doggo" },
            { label: "Custom URL", value: "custom" }
        ]
    },
    muteSound: {
        type: OptionType.SELECT,
        description: "Mute & Unmute Sound",
        options: [
            { label: "Default Discord", value: "default" },
            { label: "🎃 Halloween 2024", value: "halloween_2024", default: true },
            { label: "👻 Halloween Classic", value: "halloween_classic" },
            { label: "❄️ Winter Holiday", value: "winter" },
            { label: "🐶 Doggo Sword Slash", value: "doggo" },
            { label: "Custom URL", value: "custom" }
        ]
    },
    voiceSound: {
        type: OptionType.SELECT,
        description: "Voice Connection (Join, Leave, Disconnect, Moved)",
        options: [
            { label: "Default Discord", value: "default" },
            { label: "👻 Halloween Classic", value: "halloween_classic", default: true },
            { label: "❄️ Winter Holiday", value: "winter" },
            { label: "Custom URL", value: "custom" }
        ]
    },
    cameraSound: {
        type: OptionType.SELECT,
        description: "Camera On / Off Sound",
        options: [
            { label: "Default Discord", value: "default", default: true },
            { label: "Custom URL", value: "custom" }
        ]
    },
    pttSound: {
        type: OptionType.SELECT,
        description: "Push-to-Talk (Start / Stop) Sound",
        options: [
            { label: "Default Discord", value: "default", default: true },
            { label: "Custom URL", value: "custom" }
        ]
    },
    streamSound: {
        type: OptionType.SELECT,
        description: "Stream & Screen Share (Start, Stop, Viewer Join/Leave)",
        options: [
            { label: "Default Discord", value: "default", default: true },
            { label: "Custom URL", value: "custom" }
        ]
    },
    activitySound: {
        type: OptionType.SELECT,
        description: "Activities (Launch, End, User Join/Leave)",
        options: [
            { label: "Default Discord", value: "default", default: true },
            { label: "Custom URL", value: "custom" }
        ]
    },
    stageSound: {
        type: OptionType.SELECT,
        description: "Invited to Speak (Stage / Reconnect)",
        options: [
            { label: "Default Discord", value: "default", default: true },
            { label: "Custom URL", value: "custom" }
        ]
    },
    // Custom URL storage keys (hidden from standard settings list, rendered in CustomPanel)
    customUrl_message1: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    customUrl_message3: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    customUrl_ring: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    customUrl_deafen: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    customUrl_undeafen: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    customUrl_mute: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    customUrl_unmute: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    customUrl_user_join: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    customUrl_user_leave: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    customUrl_disconnect: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    customUrl_user_moved: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    customUrl_camera_on: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    customUrl_camera_off: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    customUrl_ptt_start: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    customUrl_ptt_stop: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    customUrl_stream_started: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    customUrl_stream_ended: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    customUrl_activity_launch: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    customUrl_activity_end: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    customUrl_reconnect: { type: OptionType.STRING, description: "Custom URL", default: "", hidden: true },
    panel: {
        type: OptionType.COMPONENT,
        description: "",
        component: SpookySettingsPanel
    }
});

function getMappedSound(soundName: string): { url?: string; builtIn?: string; } | undefined {
    // 1. Check custom URL override if configured for this sound
    const customKey = `customUrl_${soundName}` as keyof typeof settings.store;
    const directCustom = (settings.store[customKey] as string | undefined)?.trim();
    if (directCustom) return { url: directCustom };

    // Also check category-level custom URL bindings
    if (soundName === "call_ringing" || soundName === "call_calling") {
        if (settings.store.ringSound === "custom") {
            const u = settings.store.customUrl_ring?.trim();
            if (u) return { url: u };
        }
    }

    // 2. Messages category (message1, message3)
    if (soundName === "message1" || soundName === "message3") {
        const opt = settings.store.messageSound;
        if (opt === "doggo") return { builtIn: "doggo_bark" };
        if (opt === "halloween_2024") return { url: HALLOWEEN_2024_URLS[soundName] };
        if (opt === "halloween_classic") return { builtIn: "halloween_message1" };
        if (opt === "retro") return { builtIn: "bit_message1" };
        if (opt === "ducky") return { builtIn: "ducky_message1" };
        if (opt === "bop") return { builtIn: "bop_message1" };
        if (opt === "lofi") return { builtIn: "lofi_message1" };
        if (opt === "asmr") return { builtIn: "asmr_message1" };
        if (opt === "discodo") return { builtIn: "discodo" };
        return undefined;
    }

    // 3. Ringing & Call category (call_ringing, call_calling)
    if (soundName === "call_ringing" || soundName === "call_calling") {
        const opt = settings.store.ringSound;
        if (opt === "doggo") return { builtIn: "doggo_music" };
        if (opt === "halloween_2024") {
            return { url: HALLOWEEN_2024_URLS[soundName] || HALLOWEEN_2024_URLS.call_ringing };
        }
        if (opt === "halloween_classic") {
            return { builtIn: soundName === "call_calling" ? "halloween_call_calling" : "halloween_call_ringing" };
        }
        if (opt === "winter") {
            return { builtIn: soundName === "call_calling" ? "winter_call_calling" : "winter_call_ringing" };
        }
        if (opt === "snow_halation") return { builtIn: "call_ringing_snow_halation" };
        if (opt === "snowsgiving") return { builtIn: "call_ringing_snowsgiving" };
        if (opt === "beat") return { builtIn: "call_ringing_beat" };
        return undefined;
    }

    // 4. Deafen & Undeafen category
    if (soundName === "deafen" || soundName === "undeafen") {
        const opt = settings.store.deafenSound;
        if (opt === "doggo") {
            return { builtIn: soundName === "deafen" ? "doggo_death" : "doggo_dog_hurt" };
        }
        if (opt === "halloween_2024") return { url: HALLOWEEN_2024_URLS[soundName] };
        if (opt === "halloween_classic") {
            return { builtIn: soundName === "deafen" ? "halloween_deafen" : "halloween_undeafen" };
        }
        if (opt === "winter") {
            return { builtIn: soundName === "deafen" ? "winter_deafen" : "winter_undeafen" };
        }
        return undefined;
    }

    // 5. Mute & Unmute category
    if (soundName === "mute" || soundName === "unmute") {
        const opt = settings.store.muteSound;
        if (opt === "doggo") {
            return { builtIn: soundName === "mute" ? "doggo_slash" : "doggo_bark" };
        }
        if (opt === "halloween_2024") return { url: HALLOWEEN_2024_URLS[soundName] };
        if (opt === "halloween_classic") {
            return { builtIn: soundName === "mute" ? "halloween_mute" : "halloween_unmute" };
        }
        if (opt === "winter") {
            return { builtIn: soundName === "mute" ? "winter_mute" : "winter_unmute" };
        }
        return undefined;
    }

    // 6. Voice Connection category (user_join, user_leave, disconnect, user_moved)
    if (soundName === "user_join" || soundName === "user_leave" || soundName === "disconnect") {
        const opt = settings.store.voiceSound;
        if (opt === "halloween_classic") return { builtIn: `halloween_${soundName}` };
        if (opt === "winter") return { builtIn: `winter_${soundName}` };
        return undefined;
    }

    return undefined;
}

let previewAudio: HTMLAudioElement | null = null;

function stopPreview() {
    if (previewAudio) {
        previewAudio.pause();
        previewAudio.src = "";
        previewAudio = null;
    }
}

function playPreview(target: { url?: string; builtIn?: string; fallback?: string; }, onEnded?: () => void) {
    stopPreview();
    if (target.url) {
        const audio = new Audio(target.url);
        previewAudio = audio;
        audio.onended = () => {
            previewAudio = null;
            onEnded?.();
        };
        audio.onerror = () => {
            previewAudio = null;
            onEnded?.();
        };
        audio.play().catch(() => {
            previewAudio = null;
            onEnded?.();
        });
    } else {
        const nameToPlay = target.builtIn || target.fallback;
        if (nameToPlay) {
            try {
                const SoundMod = (Vencord as any)?.Webpack?.findByProps("WebAudioSound");
                if (SoundMod?.WebAudioSound) {
                    new SoundMod.WebAudioSound(nameToPlay, null, 1).play();
                }
            } catch (e) {
                console.error("[Spooky365] Preview playback failed:", e);
            }
        }
        setTimeout(() => onEnded?.(), 1000);
    }
}

function SpookySettingsPanel() {
    const forceUpdate = useForceUpdater();
    const [playingKey, setPlayingKey] = useState<string | null>(null);

    React.useEffect(() => () => stopPreview(), []);

    const previewItem = (key: string, soundName: string) => {
        if (playingKey === key) {
            stopPreview();
            setPlayingKey(null);
        } else {
            setPlayingKey(key);
            const mapped = getMappedSound(soundName);
            playPreview(
                { url: mapped?.url, builtIn: mapped?.builtIn, fallback: soundName },
                () => {
                    setPlayingKey(null);
                    forceUpdate();
                }
            );
        }
    };

    return (
        <div>
            <Paragraph className={Margins.bottom16}>
                Preview any active sound effect below, or provide custom URLs for individual sound events:
            </Paragraph>

            <Flex flexDirection="column" style={{ gap: "12px" }}>
                {/* Messages Card */}
                <Card style={{ padding: "14px" }}>
                    <Flex justifyContent="space-between" alignItems="center">
                        <Flex flexDirection="column">
                            <Heading tag="h3">💬 Messages & Notifications</Heading>
                            <Paragraph style={{ color: "var(--text-muted)", fontSize: "12px" }}>
                                Active: {settings.store.messageSound} (Ping & In-Channel)
                            </Paragraph>
                        </Flex>
                        <Flex style={{ gap: "8px" }}>
                            <Button
                                size="small"
                                variant={playingKey === "msg1" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("msg1", "message1")}
                            >
                                {playingKey === "msg1" ? "Stop" : "Preview Ping"}
                            </Button>
                            <Button
                                size="small"
                                variant={playingKey === "msg3" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("msg3", "message3")}
                            >
                                {playingKey === "msg3" ? "Stop" : "Preview Channel"}
                            </Button>
                        </Flex>
                    </Flex>
                    {settings.store.messageSound === "custom" && (
                        <div className={Margins.top8}>
                            <Paragraph style={{ fontSize: "12px" }} className={Margins.bottom4}>Custom Ping URL:</Paragraph>
                            <TextInput
                                value={settings.store.customUrl_message1}
                                placeholder="https://..."
                                onChange={(val: string) => { settings.store.customUrl_message1 = val; forceUpdate(); }}
                            />
                        </div>
                    )}
                </Card>

                {/* Call & Ringtone Card */}
                <Card style={{ padding: "14px" }}>
                    <Flex justifyContent="space-between" alignItems="center">
                        <Flex flexDirection="column">
                            <Heading tag="h3">📞 Call & Ringtone</Heading>
                            <Paragraph style={{ color: "var(--text-muted)", fontSize: "12px" }}>
                                Active: {settings.store.ringSound} (Incoming & Outgoing Ring)
                            </Paragraph>
                        </Flex>
                        <Flex style={{ gap: "8px" }}>
                            <Button
                                size="small"
                                variant={playingKey === "ring" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("ring", "call_ringing")}
                            >
                                {playingKey === "ring" ? "Stop" : "Preview Incoming Ring"}
                            </Button>
                            <Button
                                size="small"
                                variant={playingKey === "calling" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("calling", "call_calling")}
                            >
                                {playingKey === "calling" ? "Stop" : "Preview Outgoing Ring"}
                            </Button>
                        </Flex>
                    </Flex>
                    {settings.store.ringSound === "custom" && (
                        <div className={Margins.top8}>
                            <Paragraph style={{ fontSize: "12px" }} className={Margins.bottom4}>Custom Ringtone URL:</Paragraph>
                            <TextInput
                                value={settings.store.customUrl_ring}
                                placeholder="https://..."
                                onChange={(val: string) => { settings.store.customUrl_ring = val; forceUpdate(); }}
                            />
                        </div>
                    )}
                </Card>

                {/* Deafen & Undeafen Card */}
                <Card style={{ padding: "14px" }}>
                    <Flex justifyContent="space-between" alignItems="center">
                        <Flex flexDirection="column">
                            <Heading tag="h3">🔇 Deafen & Undeafen</Heading>
                            <Paragraph style={{ color: "var(--text-muted)", fontSize: "12px" }}>
                                Active: {settings.store.deafenSound}
                            </Paragraph>
                        </Flex>
                        <Flex style={{ gap: "8px" }}>
                            <Button
                                size="small"
                                variant={playingKey === "deafen" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("deafen", "deafen")}
                            >
                                {playingKey === "deafen" ? "Stop" : "Preview Deafen"}
                            </Button>
                            <Button
                                size="small"
                                variant={playingKey === "undeafen" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("undeafen", "undeafen")}
                            >
                                {playingKey === "undeafen" ? "Stop" : "Preview Undeafen"}
                            </Button>
                        </Flex>
                    </Flex>
                    {settings.store.deafenSound === "custom" && (
                        <div className={Margins.top8}>
                            <Paragraph style={{ fontSize: "12px" }} className={Margins.bottom4}>Custom Deafen URL:</Paragraph>
                            <TextInput
                                value={settings.store.customUrl_deafen}
                                placeholder="https://..."
                                onChange={(val: string) => { settings.store.customUrl_deafen = val; forceUpdate(); }}
                            />
                        </div>
                    )}
                </Card>

                {/* Mute & Unmute Card */}
                <Card style={{ padding: "14px" }}>
                    <Flex justifyContent="space-between" alignItems="center">
                        <Flex flexDirection="column">
                            <Heading tag="h3">🎙️ Mute & Unmute</Heading>
                            <Paragraph style={{ color: "var(--text-muted)", fontSize: "12px" }}>
                                Active: {settings.store.muteSound}
                            </Paragraph>
                        </Flex>
                        <Flex style={{ gap: "8px" }}>
                            <Button
                                size="small"
                                variant={playingKey === "mute" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("mute", "mute")}
                            >
                                {playingKey === "mute" ? "Stop" : "Preview Mute"}
                            </Button>
                            <Button
                                size="small"
                                variant={playingKey === "unmute" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("unmute", "unmute")}
                            >
                                {playingKey === "unmute" ? "Stop" : "Preview Unmute"}
                            </Button>
                        </Flex>
                    </Flex>
                    {settings.store.muteSound === "custom" && (
                        <div className={Margins.top8}>
                            <Paragraph style={{ fontSize: "12px" }} className={Margins.bottom4}>Custom Mute URL:</Paragraph>
                            <TextInput
                                value={settings.store.customUrl_mute}
                                placeholder="https://..."
                                onChange={(val: string) => { settings.store.customUrl_mute = val; forceUpdate(); }}
                            />
                        </div>
                    )}
                </Card>

                {/* Voice Connection Card */}
                <Card style={{ padding: "14px" }}>
                    <Flex justifyContent="space-between" alignItems="center">
                        <Flex flexDirection="column">
                            <Heading tag="h3">🚪 Voice Channel (Join, Leave, Disconnect, Moved)</Heading>
                            <Paragraph style={{ color: "var(--text-muted)", fontSize: "12px" }}>
                                Active: {settings.store.voiceSound}
                            </Paragraph>
                        </Flex>
                        <Flex style={{ gap: "8px" }}>
                            <Button
                                size="small"
                                variant={playingKey === "user_join" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("user_join", "user_join")}
                            >
                                {playingKey === "user_join" ? "Stop" : "Preview Join"}
                            </Button>
                            <Button
                                size="small"
                                variant={playingKey === "user_leave" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("user_leave", "user_leave")}
                            >
                                {playingKey === "user_leave" ? "Stop" : "Preview Leave"}
                            </Button>
                            <Button
                                size="small"
                                variant={playingKey === "disconnect" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("disconnect", "disconnect")}
                            >
                                {playingKey === "disconnect" ? "Stop" : "Preview Disconnect"}
                            </Button>
                            <Button
                                size="small"
                                variant={playingKey === "user_moved" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("user_moved", "user_moved")}
                            >
                                {playingKey === "user_moved" ? "Stop" : "Preview Moved"}
                            </Button>
                        </Flex>
                    </Flex>
                </Card>

                {/* Camera Card */}
                <Card style={{ padding: "14px" }}>
                    <Flex justifyContent="space-between" alignItems="center">
                        <Flex flexDirection="column">
                            <Heading tag="h3">📹 Camera On & Off</Heading>
                            <Paragraph style={{ color: "var(--text-muted)", fontSize: "12px" }}>
                                Active: {settings.store.cameraSound}
                            </Paragraph>
                        </Flex>
                        <Flex style={{ gap: "8px" }}>
                            <Button
                                size="small"
                                variant={playingKey === "cam_on" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("cam_on", "camera_on")}
                            >
                                {playingKey === "cam_on" ? "Stop" : "Preview Camera On"}
                            </Button>
                            <Button
                                size="small"
                                variant={playingKey === "cam_off" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("cam_off", "camera_off")}
                            >
                                {playingKey === "cam_off" ? "Stop" : "Preview Camera Off"}
                            </Button>
                        </Flex>
                    </Flex>
                    {settings.store.cameraSound === "custom" && (
                        <div className={Margins.top8}>
                            <Paragraph style={{ fontSize: "12px" }} className={Margins.bottom4}>Custom Camera On URL:</Paragraph>
                            <TextInput
                                value={settings.store.customUrl_camera_on}
                                placeholder="https://..."
                                onChange={(val: string) => { settings.store.customUrl_camera_on = val; forceUpdate(); }}
                            />
                        </div>
                    )}
                </Card>

                {/* Push-to-Talk Card */}
                <Card style={{ padding: "14px" }}>
                    <Flex justifyContent="space-between" alignItems="center">
                        <Flex flexDirection="column">
                            <Heading tag="h3">🎙️ Push-to-Talk (Start & Stop)</Heading>
                            <Paragraph style={{ color: "var(--text-muted)", fontSize: "12px" }}>
                                Active: {settings.store.pttSound}
                            </Paragraph>
                        </Flex>
                        <Flex style={{ gap: "8px" }}>
                            <Button
                                size="small"
                                variant={playingKey === "ptt_start" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("ptt_start", "ptt_start")}
                            >
                                {playingKey === "ptt_start" ? "Stop" : "Preview PTT On"}
                            </Button>
                            <Button
                                size="small"
                                variant={playingKey === "ptt_stop" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("ptt_stop", "ptt_stop")}
                            >
                                {playingKey === "ptt_stop" ? "Stop" : "Preview PTT Off"}
                            </Button>
                        </Flex>
                    </Flex>
                    {settings.store.pttSound === "custom" && (
                        <div className={Margins.top8}>
                            <Paragraph style={{ fontSize: "12px" }} className={Margins.bottom4}>Custom PTT Start URL:</Paragraph>
                            <TextInput
                                value={settings.store.customUrl_ptt_start}
                                placeholder="https://..."
                                onChange={(val: string) => { settings.store.customUrl_ptt_start = val; forceUpdate(); }}
                            />
                        </div>
                    )}
                </Card>

                {/* Streams & Screenshare Card */}
                <Card style={{ padding: "14px" }}>
                    <Flex justifyContent="space-between" alignItems="center">
                        <Flex flexDirection="column">
                            <Heading tag="h3">📺 Screen Share & Streams</Heading>
                            <Paragraph style={{ color: "var(--text-muted)", fontSize: "12px" }}>
                                Active: {settings.store.streamSound} (Start, Stop, Viewer Join/Leave)
                            </Paragraph>
                        </Flex>
                        <Flex style={{ gap: "8px" }}>
                            <Button
                                size="small"
                                variant={playingKey === "stream_start" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("stream_start", "stream_started")}
                            >
                                {playingKey === "stream_start" ? "Stop" : "Preview Stream Start"}
                            </Button>
                            <Button
                                size="small"
                                variant={playingKey === "stream_end" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("stream_end", "stream_ended")}
                            >
                                {playingKey === "stream_end" ? "Stop" : "Preview Stream End"}
                            </Button>
                            <Button
                                size="small"
                                variant={playingKey === "stream_joined" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("stream_joined", "stream_user_joined")}
                            >
                                {playingKey === "stream_joined" ? "Stop" : "Preview Viewer Join"}
                            </Button>
                            <Button
                                size="small"
                                variant={playingKey === "stream_left" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("stream_left", "stream_user_left")}
                            >
                                {playingKey === "stream_left" ? "Stop" : "Preview Viewer Leave"}
                            </Button>
                        </Flex>
                    </Flex>
                </Card>

                {/* Activities & Stage Card */}
                <Card style={{ padding: "14px" }}>
                    <Flex justifyContent="space-between" alignItems="center">
                        <Flex flexDirection="column">
                            <Heading tag="h3">🎮 Activities & Stage</Heading>
                            <Paragraph style={{ color: "var(--text-muted)", fontSize: "12px" }}>
                                Active: Launch, End, User Join/Leave & Invited to Speak
                            </Paragraph>
                        </Flex>
                        <Flex style={{ gap: "8px" }}>
                            <Button
                                size="small"
                                variant={playingKey === "act_launch" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("act_launch", "activity_launch")}
                            >
                                {playingKey === "act_launch" ? "Stop" : "Preview Activity Launch"}
                            </Button>
                            <Button
                                size="small"
                                variant={playingKey === "act_end" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("act_end", "activity_end")}
                            >
                                {playingKey === "act_end" ? "Stop" : "Preview Activity End"}
                            </Button>
                            <Button
                                size="small"
                                variant={playingKey === "reconnect" ? "dangerPrimary" : "secondary"}
                                onClick={() => previewItem("reconnect", "reconnect")}
                            >
                                {playingKey === "reconnect" ? "Stop" : "Preview Invited to Speak"}
                            </Button>
                        </Flex>
                    </Flex>
                </Card>
            </Flex>
        </div>
    );
}

export default definePlugin({
    name: "Spooky365",
    description: "Replaces Discord sounds all year round",
    authors: [{ name: "ren", id: 163734654040539136n }],
    settings,

    resolveAudioSrc(name: string, lookupFn: (path: string) => string): string {
        const mapped = getMappedSound(name);
        if (mapped?.url) {
            return mapped.url;
        }
        if (mapped?.builtIn) {
            try {
                return lookupFn(`./${mapped.builtIn}.mp3`);
            } catch (e) {
                console.error(`[Spooky365] Failed to lookup sound: ${mapped.builtIn}`, e);
            }
        }
        return lookupFn(`./${name}.mp3`);
    },

    patches: [
        {
            find: "ensureAudio(){",
            replacement: {
                match: /(\i\.src=)([^,;]+?)(?:\(`\.\/\$\{this\.name\}\.mp3`\)|\("\.\/"\.concat\(this\.name,"\.mp3"\)\))/,
                replace: "$1$self.resolveAudioSrc(this.name,$2)"
            }
        }
    ]
});
