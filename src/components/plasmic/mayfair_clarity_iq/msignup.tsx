// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bVumzfkpaXXcvNmP8r5aNd
// Component: XnV5QBIK7FFr

import * as React from "react";

import { useNavigate } from "react-router-dom"; 
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
import sty from "./PlasmicSignup.module.css"; // plasmic-import: XnV5QBIK7FFr/css

import Brush1Icon from "./icons/PlasmicIcon__Brush1"; // plasmic-import: NpYIUrEHUBa7/icon
import Menu52Icon from "./icons/PlasmicIcon__Menu52"; // plasmic-import: tEls3GRbR9PV/icon
import Code1Icon from "./icons/PlasmicIcon__Code1"; // plasmic-import: tBMAHHsP4quX/icon
import Google2Icon from "./icons/PlasmicIcon__Google2"; // plasmic-import: YQScP_wAScQF/icon
import LogoFacebook2Icon from "./icons/PlasmicIcon__LogoFacebook2"; // plasmic-import: uPUMKKVvDoUo/icon
import Apple2Icon from "./icons/PlasmicIcon__Apple2"; // plasmic-import: WKllfZf1xhG0/icon
import Line39Icon from "./icons/PlasmicIcon__Line39"; // plasmic-import: EFotQCZkiy00/icon

createPlasmicElementProxy;

export type PlasmicSignup__VariantMembers = {};
export type PlasmicSignup__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignup__VariantsArgs;
export const PlasmicSignup__VariantProps = new Array<VariantPropType>();

export type PlasmicSignup__ArgsType = {};
type ArgPropType = keyof PlasmicSignup__ArgsType;
export const PlasmicSignup__ArgProps = new Array<ArgPropType>();

export type PlasmicSignup__OverridesType = {
  root?: Flex__<"div">;
  wireframe18?: Flex__<"div">;
  group?: Flex__<"div">;
  signUpWithOnlyEmail?: Flex__<"div">;
  group15?: Flex__<"div">;
  button145?: Flex__<"div">;
  text?: Flex__<"div">;
  button146?: Flex__<"div">;
  text2?: Flex__<"div">;
  button147?: Flex__<"div">;
  text3?: Flex__<"div">;
  textbox14?: Flex__<"div">;
  textfield?: Flex__<"div">;
  button148?: Flex__<"div">;
  rectangle79?: Flex__<"div">;
};

export interface DefaultSignupProps {
  className?: string;
}

const $$ = {};

function PlasmicSignup__RenderFunc(props: {
  variants: PlasmicSignup__VariantsArgs;
  args: PlasmicSignup__ArgsType;
  overrides: PlasmicSignup__OverridesType;
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

  const navigate = useNavigate(); 

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
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
            data-plasmic-name={"wireframe18"}
            data-plasmic-override={overrides.wireframe18}
            className={classNames(projectcss.all, sty.wireframe18)}
          >
            <div
              data-plasmic-name={"group"}
              data-plasmic-override={overrides.group}
              className={classNames(projectcss.all, sty.group)}
            >
              <div
                data-plasmic-name={"signUpWithOnlyEmail"}
                data-plasmic-override={overrides.signUpWithOnlyEmail}
                className={classNames(projectcss.all, sty.signUpWithOnlyEmail)}
              >
                <Brush1Icon
                  className={classNames(projectcss.all, sty.svg__bkRiB)}
                  role={"img"}
                />

                <Menu52Icon
                  className={classNames(projectcss.all, sty.svg__i5Re8)}
                  role={"img"}
                />

                <Code1Icon
                  className={classNames(projectcss.all, sty.svg__q3BK)}
                  role={"img"}
                />

                <div
                  data-plasmic-name={"group15"}
                  data-plasmic-override={overrides.group15}
                  className={classNames(projectcss.all, sty.group15)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___2ABCg
                    )}
                  >
                    {"Create your account"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__b3ZOp
                    )}
                  >
                    {"OR"}
                  </div>
                  <div
                    data-plasmic-name={"button145"}
                    data-plasmic-override={overrides.button145}
                    className={classNames(projectcss.all, sty.button145)}
                  >
                    <div
                      data-plasmic-name={"text"}
                      data-plasmic-override={overrides.text}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text
                      )}
                    >
                      {""}
                    </div>
                    <Google2Icon
                      className={classNames(projectcss.all, sty.svg___8NmZm)}
                      role={"img"}
                    />
                  </div>
                  <div
                    data-plasmic-name={"button146"}
                    data-plasmic-override={overrides.button146}
                    className={classNames(projectcss.all, sty.button146)}
                  >
                    <div
                      data-plasmic-name={"text2"}
                      data-plasmic-override={overrides.text2}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text2
                      )}
                    >
                      {""}
                    </div>
                    <LogoFacebook2Icon
                      className={classNames(projectcss.all, sty.svg___1HvW)}
                      role={"img"}
                    />
                  </div>
                  <div
                    data-plasmic-name={"button147"}
                    data-plasmic-override={overrides.button147}
                    className={classNames(projectcss.all, sty.button147)}
                  >
                    <div
                      data-plasmic-name={"text3"}
                      data-plasmic-override={overrides.text3}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text3
                      )}
                    >
                      {""}
                    </div>
                    <Apple2Icon
                      className={classNames(projectcss.all, sty.svg__dfDjt)}
                      role={"img"}
                    />
                  </div>
                  <div
                    data-plasmic-name={"textbox14"}
                    data-plasmic-override={overrides.textbox14}
                    className={classNames(projectcss.all, sty.textbox14)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__it9Et
                      )}
                    >
                      {"Email"}
                    </div>
                    <div
                      data-plasmic-name={"textfield"}
                      data-plasmic-override={overrides.textfield}
                      className={classNames(projectcss.all, sty.textfield)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__qv0Ac
                        )}
                      >
                        {"example.email@gmail.com"}
                      </div>
                    </div>
                  </div>
                  <div
                    data-plasmic-name={"button148"}
                    data-plasmic-override={overrides.button148}
                    className={classNames(projectcss.all, sty.button148)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__le9Jj
                      )}
                    >
                      {"Continue"}
                    </div>
                  </div>
                  <div
                  onClick={() => navigate("/signin")}
                    className={classNames(
                      projectcss.all,
                    //   projectcss.__wab_text,
                      sty.text__fwQI
                    )}
                  >
                    {"Already have an account? Log in"}
                  </div>
                  <Line39Icon
                    className={classNames(projectcss.all, sty.svg__jsZnp)}
                    role={"img"}
                  />
                </div>
                <div
                  data-plasmic-name={"rectangle79"}
                  data-plasmic-override={overrides.rectangle79}
                  className={classNames(projectcss.all, sty.rectangle79)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "wireframe18",
    "group",
    "signUpWithOnlyEmail",
    "group15",
    "button145",
    "text",
    "button146",
    "text2",
    "button147",
    "text3",
    "textbox14",
    "textfield",
    "button148",
    "rectangle79"
  ],
  wireframe18: [
    "wireframe18",
    "group",
    "signUpWithOnlyEmail",
    "group15",
    "button145",
    "text",
    "button146",
    "text2",
    "button147",
    "text3",
    "textbox14",
    "textfield",
    "button148",
    "rectangle79"
  ],
  group: [
    "group",
    "signUpWithOnlyEmail",
    "group15",
    "button145",
    "text",
    "button146",
    "text2",
    "button147",
    "text3",
    "textbox14",
    "textfield",
    "button148",
    "rectangle79"
  ],
  signUpWithOnlyEmail: [
    "signUpWithOnlyEmail",
    "group15",
    "button145",
    "text",
    "button146",
    "text2",
    "button147",
    "text3",
    "textbox14",
    "textfield",
    "button148",
    "rectangle79"
  ],
  group15: [
    "group15",
    "button145",
    "text",
    "button146",
    "text2",
    "button147",
    "text3",
    "textbox14",
    "textfield",
    "button148"
  ],
  button145: ["button145", "text"],
  text: ["text"],
  button146: ["button146", "text2"],
  text2: ["text2"],
  button147: ["button147", "text3"],
  text3: ["text3"],
  textbox14: ["textbox14", "textfield"],
  textfield: ["textfield"],
  button148: ["button148"],
  rectangle79: ["rectangle79"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  wireframe18: "div";
  group: "div";
  signUpWithOnlyEmail: "div";
  group15: "div";
  button145: "div";
  text: "div";
  button146: "div";
  text2: "div";
  button147: "div";
  text3: "div";
  textbox14: "div";
  textfield: "div";
  button148: "div";
  rectangle79: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignup__VariantsArgs;
    args?: PlasmicSignup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSignup__ArgsType,
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
          internalArgPropNames: PlasmicSignup__ArgProps,
          internalVariantPropNames: PlasmicSignup__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSignup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignup";
  } else {
    func.displayName = `PlasmicSignup.${nodeName}`;
  }
  return func;
}

export const PlasmicSignup = Object.assign(
  // Top-level PlasmicSignup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    wireframe18: makeNodeComponent("wireframe18"),
    group: makeNodeComponent("group"),
    signUpWithOnlyEmail: makeNodeComponent("signUpWithOnlyEmail"),
    group15: makeNodeComponent("group15"),
    button145: makeNodeComponent("button145"),
    text: makeNodeComponent("text"),
    button146: makeNodeComponent("button146"),
    text2: makeNodeComponent("text2"),
    button147: makeNodeComponent("button147"),
    text3: makeNodeComponent("text3"),
    textbox14: makeNodeComponent("textbox14"),
    textfield: makeNodeComponent("textfield"),
    button148: makeNodeComponent("button148"),
    rectangle79: makeNodeComponent("rectangle79"),

    // Metadata about props expected for PlasmicSignup
    internalVariantProps: PlasmicSignup__VariantProps,
    internalArgProps: PlasmicSignup__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSignup;
/* prettier-ignore-end */
