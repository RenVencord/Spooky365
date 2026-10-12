# 🎃 Spooky365

This plugin was originally made for a friend who requested to have the Halloween Discord sounds all year round, but while I was researching the implementation, I came across every sound that Discord stores, so I made them all options!

## Sound Categories & Variants

| Category | Discord Event Name(s) | Built-in Variants Available |
| :--- | :--- | :--- |
| **Messages & Pings** | `message1`, `message3` | 🎃 Halloween 2024, 👻 Halloween Classic, 🐶 Doggo Bark, 👾 Retro (8-Bit), 🦆 Ducky, 🫧 Bubble (Bop), 🎧 Lofi, 🎙️ ASMR, 🤖 Discodo |
| **Calls & Ringtone** | `call_ringing`, `call_calling` | 🎃 Halloween 2024, 👻 Halloween Classic, ❄️ Winter Holiday, 🐶 Doggo Arcade Music, 🎶 Snow Halation, 🎄 Snowsgiving, 🥁 Ringing Beat |
| **Deafen & Undeafen** | `deafen`, `undeafen` | 🎃 Halloween 2024, 👻 Halloween Classic, ❄️ Winter Holiday, 🐶 Doggo Death / Hurt |
| **Mute & Unmute** | `mute`, `unmute` | 🎃 Halloween 2024, 👻 Halloween Classic, ❄️ Winter Holiday, 🐶 Doggo Sword Slash / Bark |
| **Voice Connection** | `user_join`, `user_leave`, `disconnect`, `user_moved` | 👻 Halloween Classic, ❄️ Winter Holiday |
| **Camera** | `camera_on`, `camera_off` | Default |
| **Push-to-Talk** | `ptt_start`, `ptt_stop` | Default |
| **Screen Share & Streams**| `stream_started`, `stream_ended`, `stream_user_joined`, `stream_user_left` | Default |
| **Activities** | `activity_launch`, `activity_end`, `activity_user_join`, `activity_user_left` | Default |
| **Stage** | `reconnect` (Invited to Speak) | Default |

## Installation
1. [Build Vencord from source](https://docs.vencord.dev/installing/) if you haven't already.
2. Clone the repository inside your Vencord `src/userplugins` folder (create the `userplugins` folder if it doesn't exist)
```bash
cd Vencord/src/userplugins
git clone https://github.com/RenVencord/Spooky365
pnpm build
````
3. Then reload Vencord and enable the plugin!
