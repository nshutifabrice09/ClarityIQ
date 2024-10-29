// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bVumzfkpaXXcvNmP8r5aNd
// Component: NnxBKDAEKL2O

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: bVumzfkpaXXcvNmP8r5aNd/projectcss
import sty from "./PlasmicPaymentform.module.css"; // plasmic-import: NnxBKDAEKL2O/css

import VectorIcon from "./icons/PlasmicIcon__Vector"; // plasmic-import: IVvWcsL9WC-I/icon
import ChevronDownLarge2Icon from "./icons/PlasmicIcon__ChevronDownLarge2"; // plasmic-import: dScs6CDelQTJ/icon
import Calendar3Icon from "./icons/PlasmicIcon__Calendar3"; // plasmic-import: p3C_jR3V7x0F/icon
import resizingHandleWYgtEhDo9R9 from "./images/resizingHandle.svg"; // plasmic-import: wYGTEhDo-9R9/picture

createPlasmicElementProxy;

export type PlasmicPaymentform__VariantMembers = {};
export type PlasmicPaymentform__VariantsArgs = {};
type VariantPropType = keyof PlasmicPaymentform__VariantsArgs;
export const PlasmicPaymentform__VariantProps = new Array<VariantPropType>();

export type PlasmicPaymentform__ArgsType = {};
type ArgPropType = keyof PlasmicPaymentform__ArgsType;
export const PlasmicPaymentform__ArgProps = new Array<ArgPropType>();

export type PlasmicPaymentform__OverridesType = {
  root?: Flex__<"div">;
  frame?: Flex__<"div">;
  container99?: Flex__<"div">;
  textbox31?: Flex__<"div">;
  textfield?: Flex__<"div">;
  textarea6?: Flex__<"div">;
  textfield2?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  button45?: Flex__<"div">;
  button46?: Flex__<"div">;
  textbox33?: Flex__<"div">;
  textfield3?: Flex__<"div">;
  textbox34?: Flex__<"div">;
  periodPayed?: Flex__<"div">;
  textfield4?: Flex__<"div">;
  textbox36?: Flex__<"div">;
  textfield5?: Flex__<"div">;
  textbox37?: Flex__<"div">;
  textfield6?: Flex__<"div">;
};

export interface DefaultPaymentformProps {
  className?: string;
}

const $$ = {};

function PlasmicPaymentform__RenderFunc(props: {
  variants: PlasmicPaymentform__VariantsArgs;
  args: PlasmicPaymentform__ArgsType;
  overrides: PlasmicPaymentform__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"frame"}
        data-plasmic-override={overrides.frame}
        className={classNames(projectcss.all, sty.frame)}
      >
        <VectorIcon
          className={classNames(projectcss.all, sty.svg___2SJ4P)}
          role={"img"}
        />

        <div
          data-plasmic-name={"container99"}
          data-plasmic-override={overrides.container99}
          className={classNames(projectcss.all, sty.container99)}
        >
          <div
            data-plasmic-name={"textbox31"}
            data-plasmic-override={overrides.textbox31}
            className={classNames(projectcss.all, sty.textbox31)}
          >
            <div
              data-plasmic-name={"textfield"}
              data-plasmic-override={overrides.textfield}
              className={classNames(projectcss.all, sty.textfield)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cvx9A
                )}
              >
                {"Input text"}
              </div>
              <ChevronDownLarge2Icon
                className={classNames(projectcss.all, sty.svg__ym4F)}
                role={"img"}
              />
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___0A3El
              )}
            >
              {"Payment Method"}
            </div>
          </div>
          <div
            data-plasmic-name={"textarea6"}
            data-plasmic-override={overrides.textarea6}
            className={classNames(projectcss.all, sty.textarea6)}
          >
            <div
              data-plasmic-name={"textfield2"}
              data-plasmic-override={overrides.textfield2}
              className={classNames(projectcss.all, sty.textfield2)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oQrYx
                )}
              >
                {"Input text"}
              </div>
              <PlasmicImg__
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"12px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"12px"}
                loading={"lazy"}
                src={{
                  src: resizingHandleWYgtEhDo9R9,
                  fullWidth: 12,
                  fullHeight: 12,
                  aspectRatio: 1
                }}
              />
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__h53Fh
              )}
            >
              {"Payment Notes"}
            </div>
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__iH75V
            )}
          >
            {"Caption goes here"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__qeNu4
            )}
          >
            {"Payment Form"}
          </div>
          <div
            data-plasmic-name={"button45"}
            data-plasmic-override={overrides.button45}
            className={classNames(projectcss.all, sty.button45)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mjAdC
              )}
            >
              {"Save"}
            </div>
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__h2UbZ
            )}
          >
            {"Sub-title goes here"}
          </div>
          <div
            data-plasmic-name={"button46"}
            data-plasmic-override={overrides.button46}
            className={classNames(projectcss.all, sty.button46)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__fggbo
              )}
            >
              {"Cancel"}
            </div>
          </div>
          <div
            data-plasmic-name={"textbox33"}
            data-plasmic-override={overrides.textbox33}
            className={classNames(projectcss.all, sty.textbox33)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uxRd1
              )}
            >
              {"Amount To be pared"}
            </div>
            <div
              data-plasmic-name={"textfield3"}
              data-plasmic-override={overrides.textfield3}
              className={classNames(projectcss.all, sty.textfield3)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__sOgj
                )}
              >
                {"Input text"}
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"textbox34"}
            data-plasmic-override={overrides.textbox34}
            className={classNames(projectcss.all, sty.textbox34)}
          >
            <div
              data-plasmic-name={"periodPayed"}
              data-plasmic-override={overrides.periodPayed}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.periodPayed
              )}
            >
              {"Period Payed "}
            </div>
            <div
              data-plasmic-name={"textfield4"}
              data-plasmic-override={overrides.textfield4}
              className={classNames(projectcss.all, sty.textfield4)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__akrL
                )}
              >
                {"Input text"}
              </div>
              <ChevronDownLarge2Icon
                className={classNames(projectcss.all, sty.svg__iAaHb)}
                role={"img"}
              />
            </div>
          </div>
          <div
            data-plasmic-name={"textbox36"}
            data-plasmic-override={overrides.textbox36}
            className={classNames(projectcss.all, sty.textbox36)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___7SuhJ
              )}
            >
              {"Payment Date"}
            </div>
            <div
              data-plasmic-name={"textfield5"}
              data-plasmic-override={overrides.textfield5}
              className={classNames(projectcss.all, sty.textfield5)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__orqtU
                )}
              >
                {"Input text"}
              </div>
              <Calendar3Icon
                className={classNames(projectcss.all, sty.svg__gob0)}
                role={"img"}
              />
            </div>
          </div>
          <div
            data-plasmic-name={"textbox37"}
            data-plasmic-override={overrides.textbox37}
            className={classNames(projectcss.all, sty.textbox37)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___43NlE
              )}
            >
              {"Rental"}
            </div>
            <div
              data-plasmic-name={"textfield6"}
              data-plasmic-override={overrides.textfield6}
              className={classNames(projectcss.all, sty.textfield6)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ynqO6
                )}
              >
                {"Input text"}
              </div>
              <ChevronDownLarge2Icon
                className={classNames(projectcss.all, sty.svg__mcFp8)}
                role={"img"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "frame",
    "container99",
    "textbox31",
    "textfield",
    "textarea6",
    "textfield2",
    "img",
    "button45",
    "button46",
    "textbox33",
    "textfield3",
    "textbox34",
    "periodPayed",
    "textfield4",
    "textbox36",
    "textfield5",
    "textbox37",
    "textfield6"
  ],
  frame: [
    "frame",
    "container99",
    "textbox31",
    "textfield",
    "textarea6",
    "textfield2",
    "img",
    "button45",
    "button46",
    "textbox33",
    "textfield3",
    "textbox34",
    "periodPayed",
    "textfield4",
    "textbox36",
    "textfield5",
    "textbox37",
    "textfield6"
  ],
  container99: [
    "container99",
    "textbox31",
    "textfield",
    "textarea6",
    "textfield2",
    "img",
    "button45",
    "button46",
    "textbox33",
    "textfield3",
    "textbox34",
    "periodPayed",
    "textfield4",
    "textbox36",
    "textfield5",
    "textbox37",
    "textfield6"
  ],
  textbox31: ["textbox31", "textfield"],
  textfield: ["textfield"],
  textarea6: ["textarea6", "textfield2", "img"],
  textfield2: ["textfield2", "img"],
  img: ["img"],
  button45: ["button45"],
  button46: ["button46"],
  textbox33: ["textbox33", "textfield3"],
  textfield3: ["textfield3"],
  textbox34: ["textbox34", "periodPayed", "textfield4"],
  periodPayed: ["periodPayed"],
  textfield4: ["textfield4"],
  textbox36: ["textbox36", "textfield5"],
  textfield5: ["textfield5"],
  textbox37: ["textbox37", "textfield6"],
  textfield6: ["textfield6"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  frame: "div";
  container99: "div";
  textbox31: "div";
  textfield: "div";
  textarea6: "div";
  textfield2: "div";
  img: typeof PlasmicImg__;
  button45: "div";
  button46: "div";
  textbox33: "div";
  textfield3: "div";
  textbox34: "div";
  periodPayed: "div";
  textfield4: "div";
  textbox36: "div";
  textfield5: "div";
  textbox37: "div";
  textfield6: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPaymentform__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPaymentform__VariantsArgs;
    args?: PlasmicPaymentform__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPaymentform__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPaymentform__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPaymentform__ArgProps,
          internalVariantPropNames: PlasmicPaymentform__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPaymentform__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPaymentform";
  } else {
    func.displayName = `PlasmicPaymentform.${nodeName}`;
  }
  return func;
}

export const PlasmicPaymentform = Object.assign(
  // Top-level PlasmicPaymentform renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    frame: makeNodeComponent("frame"),
    container99: makeNodeComponent("container99"),
    textbox31: makeNodeComponent("textbox31"),
    textfield: makeNodeComponent("textfield"),
    textarea6: makeNodeComponent("textarea6"),
    textfield2: makeNodeComponent("textfield2"),
    img: makeNodeComponent("img"),
    button45: makeNodeComponent("button45"),
    button46: makeNodeComponent("button46"),
    textbox33: makeNodeComponent("textbox33"),
    textfield3: makeNodeComponent("textfield3"),
    textbox34: makeNodeComponent("textbox34"),
    periodPayed: makeNodeComponent("periodPayed"),
    textfield4: makeNodeComponent("textfield4"),
    textbox36: makeNodeComponent("textbox36"),
    textfield5: makeNodeComponent("textfield5"),
    textbox37: makeNodeComponent("textbox37"),
    textfield6: makeNodeComponent("textfield6"),

    // Metadata about props expected for PlasmicPaymentform
    internalVariantProps: PlasmicPaymentform__VariantProps,
    internalArgProps: PlasmicPaymentform__ArgProps
  }
);

export default PlasmicPaymentform;
/* prettier-ignore-end */
